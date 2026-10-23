import React,{useEffect,useRef,useState} from 'react';
import {Copy,Check,X} from 'lucide-react';
import {Button} from './vendor/button';

export function CopyLink({href}:{href:string}){
 const [status,setStatus]=useState<'idle'|'copied'|'failed'>('idle');
 const timer=useRef<number|undefined>(undefined);
 const request=useRef(0);
 useEffect(()=>()=>{request.current++;window.clearTimeout(timer.current)},[]);
 async function copy(){
  const attempt=++request.current;
  window.clearTimeout(timer.current);
  try{
   await navigator.clipboard.writeText(href);
   if(attempt!==request.current)return;
   setStatus('copied');
  }catch{
   if(attempt!==request.current)return;
   setStatus('failed');
  }
  timer.current=window.setTimeout(()=>setStatus('idle'),2000);
 }
 const message=status==='copied'?'Link copied':status==='failed'?'Could not copy link. Please try again.':'';
 const Icon=status==='copied'?Check:status==='failed'?X:Copy;
 return <>
  <Button className="copy-link" size="icon" variant="ghost" onClick={copy} aria-label="Copy link" title={message||'Copy link'} data-copy-state={status} lang="en"><Icon size={18} strokeWidth={1.5} aria-hidden="true"/></Button>
  <span className="sr-only" role="status" aria-live="polite" lang="en">{message}</span>
 </>;
}
