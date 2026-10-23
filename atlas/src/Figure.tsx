import React from 'react';
const silhouette = 'M39 82V53C39 24 69 18 81 36C96 15 124 30 121 54V82L108 95L91 86L75 95L58 86Z';
const illustratedKinds=new Set(['morph','figma','brex','ambrook','linear','mercury','notion','phantom','robinhood','cointracker']);
function Drawing({kind,second}:{kind:string;second:boolean}){
 const hatch='hatch-'+kind+'-'+second;
 return <svg viewBox="0 0 160 120" aria-hidden="true" className="diagram-svg">
 <defs><pattern id={hatch} width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".7" fill="currentColor"/></pattern></defs>
 <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
 {kind==='morph'?<><path d={silhouette} fill={second?'url(#'+hatch+')':'none'}/><path d="M65 57V63M94 57V63M72 75Q80 81 88 75"/></>:
 kind==='cointracker'?second?<>{Array.from({length:8},(_,i)=><g key={i} transform={`translate(${12+(i%4)*36} ${20+Math.floor(i/4)*46})`}><rect width="28" height="34" rx="2"/><path d="M6 9H22M6 17H14M6 24H22"/></g>)}</>:<>{Array.from({length:28},(_,i)=><rect key={i} x={19+(i%7)*18} y={24+Math.floor(i/7)*20} width="14" height="14" rx="1"/>)}</>:
 kind==='figma'?<><rect className="ghost" x="36" y="20" width="88" height="80"/><path className={second?'diagram-arrive':''} d={second?'M37 81Q80 -18 123 81Z':'M37 81L80 21L123 81Z'}/>{[[36,20],[124,20],[36,100],[124,100]].map(([x,y])=>second?<circle key={x+'-'+y} cx={x} cy={y} r="4" className="paper"/>:<rect key={x+'-'+y} x={x-4} y={y-4} width="8" height="8" className="paper"/>)}</>:
 kind==='brex'?<><path d="M45 87V33L77 48L45 64"/><path className="ghost" d="M35 98H124"/>{second?<g className="diagram-arrive"><rect x="89" y="38" width="34" height="43" rx="5"/><path d="M99 60H113M106 53V67"/></g>:<path className="ghost" d="M91 47H120M91 61H111"/>}</>:
 kind==='ambrook'?<><rect className="ghost" x="24" y="18" width="112" height="86" rx="3"/><path d="M25 84Q65 67 135 86"/><path d="M54 66H109M61 66V91M102 66V91"/>{second?<g className="diagram-arrive"><path d="M68 45L90 40L95 51L73 56ZM73 28L94 25L96 34L75 37ZM66 59L88 54L91 62L69 66"/></g>:<path d="M70 60H91V65H70ZM74 55H96V60H74"/>}</>:
 kind==='linear'?second?<><rect x="25" y="27" width="110" height="69" rx="6"/><path d="M40 44H115M40 59H105M40 74H119"/><rect className="ghost" x="85" y="37" width="37" height="47" rx="8"/></>:<><rect x="29" y="24" width="102" height="72" rx="6"/><path className="ghost" d="M46 24V96M63 24V96M80 24V96M97 24V96M114 24V96M29 42H131M29 60H131M29 78H131"/><rect className="paper" x="61" y="43" width="45" height="38" rx="6"/><path d="M73 54L95 72M95 54L73 72"/></>:
 kind==='mercury'?<><path className="ghost" d="M24 99H136"/><circle cx={second?52:72} cy={second?68:56} r="24"/><rect className={second?'diagram-arrive':''} x={second?91:62} y={second?38:49} width="28" height={second?60:49} rx="2"/><path d={second?'M68 32L89 69H47Z':'M94 25L115 62H73Z'}/></>:
 kind==='notion'?<><rect x="23" y="17" width="114" height="88"/>{second?<g className="diagram-arrive"><path d="M61 104V78C39 58 48 32 72 30C92 27 107 44 101 60L113 75H100V88H81V104"/><path className="ghost" d="M61 46H85M61 53H90M63 60H80"/></g>:<><path d="M74 61V73L64 95M74 73L87 95M74 65L59 77M74 65L87 77"/><circle cx="74" cy="51" r="10"/><path className="ghost" d="M34 95H126"/></>}</>:
 kind==='phantom'?<><rect x="25" y="20" width="110" height="80" rx="10"/><rect x="39" y="34" width="28" height="28" rx="8"/><path d="M39 78H115"/>{second?<g className="diagram-arrive"><path d="M80 62L94 31L113 62Z"/><circle className="ghost" cx="112" cy="41" r="16"/></g>:<path className="ghost" d="M80 43H117M80 56H105"/>}</>:
 <><path className="ghost" d="M20 82H140"/><rect x="20" y="44" width={second?110:37} height="24" rx="3"/>{second&&<path strokeDasharray="3 4" d="M130 44H151M130 68H151"/>}</>}
 </g></svg>
}
export function Figure({kind,labels,quietCaption=false}:{kind:string;labels:[string,string];quietCaption?:boolean}){
 if(!illustratedKinds.has(kind))return null;
 return <figure className="case-figure" aria-label={labels.join(' → ')}>
 <div className="diagram-pair">{labels.map((label,i)=><div className="diagram-panel" key={i}><Drawing kind={kind} second={i===1}/><p className="fomo-figure-label">{label}</p></div>)}</div>
 <figcaption className={quietCaption?'sr-only':'fomo-doc-caption muted'} lang="en">Editorial schematic, not original artwork</figcaption>
 </figure>
}

