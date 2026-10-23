import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from './vendor/button';
import {Input} from './vendor/input';
import {brands} from './brands';
import {Figure} from './Figure';
import {CaseImages} from './CaseImages';
import kitCss from './vendor/kit.css';
import typography from './typography.css';
import localCss from './style.css';
const host=document.getElementById('atlas-root')!;
const shadow=host.attachShadow({mode:'open'});
const sheet=document.createElement('style');sheet.textContent=kitCss+'\n'+typography+'\n'+localCss;shadow.append(sheet);
const mount=document.createElement('div');shadow.append(mount);
type Lang='ru'|'en';
type State={lang:Lang;q:string;mode:'alphabet'|'characteristics';letter:string;topic:string;selected:string;reading:boolean};
const alphabet=[...new Set(brands.map(b=>b.name[0].toUpperCase()))].sort();
const labels={all:'All',variation:'Variation',character:'Character',motion:'Motion',production:'Production',extension:'Extension',evolution:'Evolution'};
function visible(s:State){return brands.filter(b=>(s.mode==='alphabet'?(s.letter==='all'||b.name[0].toUpperCase()===s.letter):(s.topic==='all'||b.topics.includes(s.topic)))&&[b.name,b.who,b.ru.short,b.ru.title,...b.ru.diagram,b.en.short,b.en.title,...b.en.diagram,...b.findings.flatMap(f=>[...f.links.map(link=>link.label),...f.ru,...f.en])].join(' ').toLowerCase().includes(s.q.toLowerCase().trim())).sort((a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base',numeric:true}));}
function normalize(s:State){const list=visible(s);return {...s,selected:list.some(b=>b.id===s.selected)?s.selected:list[0]?.id||'',reading:list.length?s.reading:false};}
function read():State{const p=new URLSearchParams(location.search);let saved='ru';try{saved=localStorage.getItem('numz-atlas-language')||'ru'}catch{}return normalize({lang:(p.get('lang')||saved)==='en'?'en':'ru',q:p.get('q')||'',mode:p.get('view')==='characteristics'?'characteristics':'alphabet',letter:alphabet.includes(p.get('letter')||'')?p.get('letter')!:'all',topic:Object.hasOwn(labels,p.get('topic')||'')?p.get('topic')!:'all',selected:p.get('brand')||'morph',reading:p.get('read')==='1'});}
function url(s:State){const p=new URLSearchParams();p.set('lang',s.lang);if(s.selected)p.set('brand',s.selected);if(s.mode==='characteristics')p.set('view',s.mode);if(s.letter!=='all')p.set('letter',s.letter);if(s.topic!=='all')p.set('topic',s.topic);if(s.q)p.set('q',s.q);if(s.reading)p.set('read','1');return location.pathname+'?'+p.toString();}
function App(){
 const [s,set]=useState(read);const [theme,setTheme]=useState(document.documentElement.dataset.theme==='dark'?'dark':'light');
 const [copied,setCopied]=useState(false);const scroll=useRef(0);const detail=useRef<HTMLElement>(null);
 const filtered=visible(s),current=filtered.find(b=>b.id===s.selected);
 function change(patch:Partial<State>,replace=false){const next=normalize({...s,...patch});set(next);history[replace?'replaceState':'pushState'](null,'',url(next));try{localStorage.setItem('numz-atlas-language',next.lang)}catch{}setCopied(false);}
 useEffect(()=>{const pop=()=>{set(read());setCopied(false)};window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop)},[]);
 useEffect(()=>{document.documentElement.lang=s.lang;document.title=current?`${current.name} | Brand Atlas by elo`:'Brand Atlas by elo'},[s.lang,current?.id]);
 function switchTheme(){const next=theme==='light'?'dark':'light';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('numz-theme',next)}catch{}}
 function open(id:string,reset=false){scroll.current=window.scrollY;change({...(reset?{q:'',letter:'all',topic:'all'}:{}),selected:id,reading:true});requestAnimationFrame(()=>{if(matchMedia('(max-width:670px)').matches){window.scrollTo({top:0})}else if(detail.current){const top=detail.current.getBoundingClientRect().top+window.scrollY-24;if(window.scrollY>top)window.scrollTo({top:Math.max(0,top)})}detail.current?.focus({preventScroll:true})})}
 function back(){change({reading:false});requestAnimationFrame(()=>{const row=shadow.querySelector<HTMLButtonElement>(`[data-brand="${s.selected}"]`);window.scrollTo(0,scroll.current);row?.focus({preventScroll:true});row?.scrollIntoView({block:'nearest'})})}
 async function copy(){try{await navigator.clipboard.writeText(location.origin+url({...s,reading:true}));setCopied(true)}catch{setCopied(false)}}
 return <main className="atlas fomo-document fomo-doc-content" data-theme={theme} data-reading={s.reading} lang={s.lang}>
  <a className="skip" href={s.reading?'#case':'#directory'} onClick={e=>{e.preventDefault();(s.reading?detail.current:shadow.querySelector<HTMLElement>('#directory'))?.focus()}} lang="en">{s.reading?'Skip to case':'Skip to directory'}</a>
  <header><div className="title-group"><div className="eyebrow fomo-doc-caption" lang="en">by elo</div><h1 className="fomo-doc-title" lang="en">Brand Atlas</h1></div><div className="preferences" lang="en"><nav aria-label="Content language"><Button size="sm" variant="ghost" aria-pressed={s.lang==='ru'} onClick={()=>change({lang:'ru'})}>RU</Button><Button size="sm" variant="ghost" aria-pressed={s.lang==='en'} onClick={()=>change({lang:'en'})}>EN</Button></nav><Button className="theme-control" size="sm" variant="ghost" aria-label={`Switch to ${theme==='light'?'dark':'light'} theme`} onClick={switchTheme}><span className="theme-disc" aria-hidden="true"/>{theme==='light'?'Light':'Dark'}</Button></div></header>
  <p className="intro fomo-doc-lead">{s.lang==='ru'?'Как бренды меняются и остаются собой. Решения, эксперименты и детали, за которыми стоит опыт команд.':'How brands change and remain themselves. Decisions, experiments and details from the teams behind them.'}</p>
  <section className="discovery" aria-label="Browse brands" lang="en">
   <div className="toolbar"><nav className="browse-modes" aria-label="Browse by"><Button variant="ghost" aria-pressed={s.mode==='alphabet'} onClick={()=>change({mode:'alphabet',letter:'all',topic:'all',reading:false})}>A–Z</Button><Button variant="ghost" aria-pressed={s.mode==='characteristics'} onClick={()=>change({mode:'characteristics',letter:'all',topic:'all',reading:false})}>Characteristics</Button></nav><label className="search"><Input type="search" value={s.q} aria-label="Search brands, authors or findings" placeholder="Search the atlas" onChange={e=>change({q:e.target.value,reading:false},true)}/></label></div>
   {s.mode==='alphabet'?<nav className="filter-options alphabet-options" aria-label="A–Z"><Button variant="ghost" size="sm" aria-pressed={s.letter==='all'} onClick={()=>change({letter:'all',reading:false})}>All</Button>{alphabet.map(l=><Button key={l} variant="ghost" size="sm" aria-pressed={s.letter===l} aria-label={`Starts with ${l}`} onClick={()=>change({letter:l,reading:false})}>{l}</Button>)}</nav>:<nav className="filter-options characteristic-options" aria-label="Characteristics">{Object.entries(labels).map(([id,label])=><Button key={id} variant="ghost" size="sm" aria-pressed={s.topic===id} onClick={()=>change({topic:id,reading:false})}>{label}</Button>)}</nav>}
  </section>
  <div className="catalog-layout"><section id="directory" className="catalog" aria-label="Brand directory" tabIndex={-1}><div className="catalog-meta" lang="en"><span className="muted fomo-doc-caption" role="status">{filtered.length} {filtered.length===1?'brand':'brands'}</span><span className="muted fomo-doc-caption">Index</span></div>{filtered.map(b=><button key={b.id} className="brand-row" data-brand={b.id} aria-pressed={current?.id===b.id} onClick={()=>open(b.id)}><span className="brand-name">{b.name}</span><span className="row-sign" aria-hidden="true">→</span><span className="row-take">{b[s.lang].short}</span></button>)}{!filtered.length&&<div className="empty" lang="en"><p>No matches</p><Button variant="outline" onClick={()=>change({q:'',letter:'all',topic:'all'})}>Show all brands</Button></div>}</section>
  {current&&<article id="case" className="detail" aria-label={current.name} ref={detail} tabIndex={-1}>
   <Button className="mobile-back" variant="ghost" onClick={back} lang="en">← Back to directory</Button>
   <div className="detail-head"><div className="fomo-doc-caption muted"><span>{current.name}</span>{current.date&&<time className="period" dateTime={current.date.value} title={current.date.kind==='published'?'Source publication date':'Project launch date'} aria-label={`${current.date.kind==='published'?'Source published':'Project launched'} ${current.date.label}`} lang="en">{current.date.label}</time>}</div><Button className="copy-link" size="sm" variant="ghost" onClick={copy} lang="en">{copied?'Copied':'Copy link'}</Button><span className="sr-only" role="status">{copied?'Link copied':''}</span></div>
   <div key={current.id} className="case-content" data-illustrated={current.findings.some(finding=>finding.images?.length)}>
    <h2 className="fomo-doc-section-title take">{current[s.lang].title}</h2>
    {!current.hideDiagram&&<Figure kind={current.id} labels={current[s.lang].diagram} quietCaption/>}
    <div className="findings">{current.findings.map(finding=><section className="finding" id={`finding-${current.id}-${finding.id}`} key={finding.id}>
     {finding[s.lang].map((paragraph,i)=><p key={i} className="fomo-doc-paragraph">{paragraph}</p>)}
     {finding.images?.length?<CaseImages images={finding.images} lang={s.lang}/>:null}
     <div className="finding-sources" lang="en">{finding.links.map(link=><a key={link.url} className="fomo-doc-caption" href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}, opens in a new tab`}>{link.label}<span aria-hidden="true">{'\u00a0'}↗</span></a>)}</div>
    </section>)}</div>
   </div>
  </article>}
  </div>
  <footer className="fomo-doc-caption" lang="en"><span>Revised 23 October 2026</span><a href="../">Landing Motion ↗</a></footer>
 </main>
}
createRoot(mount).render(<App/>);

