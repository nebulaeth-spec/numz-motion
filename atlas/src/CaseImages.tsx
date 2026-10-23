import React,{useEffect,useRef,useState} from 'react';
import {Button} from './vendor/button';
import type {FindingImage} from './brands';
type CanvasImage=FindingImage&{canvas?:'light'|'dark';crop?:{x:number;y:number;width:number;height:number}};

export function CaseImages({images,lang,layout}:{images:CanvasImage[];lang:'ru'|'en';layout?:'single'|'pair'}){
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
  <div className="case-images" data-layout={layout||(images.length===1?'single':'pair')}>
   {images.map((item,i)=>{
    const proposed=item.crop;
    const crop=proposed&&Object.values(proposed).every(Number.isFinite)&&proposed.x>=0&&proposed.y>=0&&proposed.width>0&&proposed.height>0&&proposed.x+proposed.width<=item.width&&proposed.y+proposed.height<=item.height?proposed:undefined;
    const maxWidth=item.maxWidth&&Number.isFinite(item.maxWidth)&&item.maxWidth>0?Math.min(item.maxWidth,crop?.width||item.width):crop?.width;
    return <figure key={item.src}>
    <button className="image-open" style={maxWidth?{maxWidth}:undefined} aria-label={'Enlarge image: '+item[lang].alt} aria-haspopup="dialog" onClick={event=>{trigger.current=event.currentTarget;setSelected(i);}}>
     <span className="image-viewport" style={crop?{aspectRatio:`${crop.width} / ${crop.height}`}:undefined}>
      <img src={item.src} width={item.width} height={item.height} alt={item[lang].alt} loading="lazy" decoding="async" data-canvas={item.canvas} style={crop?{position:'absolute',maxWidth:'none',width:`${item.width/crop.width*100}%`,left:`${-crop.x/crop.width*100}%`,top:`${-crop.y/crop.height*100}%`}:undefined}/>
     </span>
     <span className="image-enlarge" aria-hidden="true">↗</span>
    </button>
    {item[lang].caption&&<figcaption className="fomo-doc-caption">{item[lang].caption}</figcaption>}
   </figure>;})}
  </div>
  {active&&<dialog className="image-dialog" ref={dialog} aria-label={active[lang].alt} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}}>
   <div className="image-dialog-toolbar">{active[lang].caption&&<p className="fomo-doc-caption">{active[lang].caption}</p>}<Button variant="ghost" onClick={close} autoFocus lang="en">Close <span aria-hidden="true">×</span></Button></div>
   <img src={active.originalSrc||active.src} width={active.width} height={active.height} alt={active[lang].alt} data-canvas={active.canvas}/>
  </dialog>}
 </>;
}

