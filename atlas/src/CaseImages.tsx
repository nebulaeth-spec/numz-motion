import React,{useEffect,useRef,useState} from 'react';
import {Button} from './vendor/button';
import type {FindingImage} from './brands';

export function CaseImages({images,lang}:{images:FindingImage[];lang:'ru'|'en'}){
 const [selected,setSelected]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const trigger=useRef<HTMLButtonElement|null>(null);
 useEffect(()=>{
  if(selected===null)return;
  const modal=dialog.current;
  if(!modal)return;
  const oldOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  modal.showModal();
  return()=>{modal.close();document.body.style.overflow=oldOverflow;trigger.current?.focus({preventScroll:true});};
 },[selected]);
 function close(){setSelected(null);}
 const active=selected===null?null:images[selected];
 return <>
  <div className="case-images">
   {images.map((item,i)=><figure key={item.src}>
    <button className="image-open" aria-label={'Enlarge image: '+item[lang].alt} aria-haspopup="dialog" onClick={event=>{trigger.current=event.currentTarget;setSelected(i);}}>
     <img src={item.src} width={item.width} height={item.height} alt={item[lang].alt} decoding="async"/>
    </button>
    <figcaption className="fomo-doc-caption">{item[lang].caption}</figcaption>
   </figure>)}
  </div>
  {active&&<dialog className="image-dialog" ref={dialog} aria-label={active[lang].alt} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}}>
   <div className="image-dialog-toolbar"><p className="fomo-doc-caption">{active[lang].caption}</p><Button variant="ghost" onClick={close} autoFocus lang="en">Close <span aria-hidden="true">×</span></Button></div>
   <img src={active.src} width={active.width} height={active.height} alt={active[lang].alt}/>
  </dialog>}
 </>;
}

