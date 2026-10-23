import React from 'react';

const silhouette = 'M39 82V53C39 24 69 18 81 36C96 15 124 30 121 54V82L108 95L91 86L75 95L58 86Z';
const illustratedKinds = new Set([
  'ambrook', 'brex', 'figma', 'mercury', 'morph', 'notion', 'phantom',
  'robinhood', 'cointracker', 'new-generation', 'speakeasy', 'granola',
  'comet', 'langchain', 'irys', 'mailchimp', 'aave', 'cohere', 'ramp',
  'zerion', 'turbopuffer', 'github', 'cash-app',
]);
const continuousKinds = new Set(['ramp', 'zerion']);

function Arrow({ d, end }: { d: string; end: string }) {
  return <g><path d={d}/><path d={end}/></g>;
}

function Drawing({ kind, second = false, wide = false }: { kind: string; second?: boolean; wide?: boolean }) {
  const hatch = 'hatch-' + kind + '-' + second;
  const stripes = 'stripes-' + kind + '-' + second;
  let shapes: React.ReactNode;

  switch (kind) {
    // The five approved miniature mechanisms remain unchanged.
    case 'morph':
      shapes = <><path d={silhouette} fill={second ? 'url(#' + hatch + ')' : 'none'}/><path d="M65 57V63M94 57V63M72 75Q80 81 88 75"/></>;
      break;
    case 'figma':
      shapes = <><rect className="ghost" x="36" y="20" width="88" height="80"/><path className={second ? 'diagram-arrive' : ''} d={second ? 'M37 81Q80 -18 123 81Z' : 'M37 81L80 21L123 81Z'}/>{[[36,20],[124,20],[36,100],[124,100]].map(([x,y]) => second ? <circle key={x+'-'+y} cx={x} cy={y} r="4" className="paper"/> : <rect key={x+'-'+y} x={x-4} y={y-4} width="8" height="8" className="paper"/>)}</>;
      break;
    case 'notion':
      shapes = <><rect x="23" y="17" width="114" height="88"/>{second ? <g className="diagram-arrive"><path d="M61 104V78C39 58 48 32 72 30C92 27 107 44 101 60L113 75H100V88H81V104"/><path className="ghost" d="M61 46H85M61 53H90M63 60H80"/></g> : <><path d="M74 61V73L64 95M74 73L87 95M74 65L59 77M74 65L87 77"/><circle cx="74" cy="51" r="10"/><path className="ghost" d="M34 95H126"/></>}</>;
      break;
    case 'phantom':
      shapes = <><rect x="25" y="20" width="110" height="80" rx="10"/><rect x="39" y="34" width="28" height="28" rx="8"/><path d="M39 78H115"/>{second ? <g className="diagram-arrive"><path d="M80 62L94 31L113 62Z"/><circle className="ghost" cx="112" cy="41" r="16"/></g> : <path className="ghost" d="M80 43H117M80 56H105"/>}</>;
      break;
    case 'cointracker':
      shapes = second ? <>{Array.from({length: 8}, (_,i) => <g key={i} transform={'translate('+(12+(i%4)*36)+' '+(20+Math.floor(i/4)*46)+')'}><rect width="28" height="34" rx="2"/><path d="M6 9H22M6 17H14M6 24H22"/></g>)}</> : <>{Array.from({length: 28}, (_,i) => <rect key={i} x={19+(i%7)*18} y={24+Math.floor(i/7)*20} width="14" height="14" rx="1"/>)}</>;
      break;
    case 'ambrook':
      shapes = <><rect className="ghost" x="20" y="16" width="120" height="88" rx="2"/>{second ? <><path d="M21 85Q57 68 139 82M21 95Q85 78 139 93"/><path d="M49 65H111M56 65V89M104 65V86"/><rect x="69" y="48" width="20" height="16" rx="1"/><path d="M79 64V69M72 69H86"/><path d="M45 30L62 25L67 39L50 44ZM94 23L108 28L103 43L89 38"/></> : <><path d="M36 78V52H93L114 65V78H105M44 78H96M93 52V65H114M32 86H124"/><circle cx="48" cy="79" r="7"/><circle cx="100" cy="79" r="7"/><path d="M41 52V35H57V51M59 52V27H75V51M77 52V33H89V51M42 40H54M61 33H72M61 39H72M79 39H86"/></>}</>;
      break;
    case 'brex':
      // A neutral folded plane represents a compositional object, not the Brex mark.
      shapes = second ? <><rect className="ghost" x="14" y="24" width="59" height="74" rx="2"/><path d="M20 39L63 31V86L20 94Z" fill={'url(#'+hatch+')'}/><path d="M28 47H59M28 55H52"/><rect className="ghost" x="88" y="24" width="59" height="74" rx="2"/><path d="M94 39L136 31V86L94 94Z"/><rect className="paper" x="102" y="48" width="27" height="26" rx="2"/><path d="M108 56H123M108 63H118"/></> : <><path className="ghost" d="M27 98H133"/><path d="M47 40L100 27V80L47 94ZM100 27L116 40V88L100 80M47 40L65 52L116 40"/><path className="ghost" d="M65 52V88"/></>;
      break;
    case 'mercury':
      shapes = second ? <><path className="ghost" d="M23 100H138"/><circle cx="65" cy="55" r="28"/><ellipse cx="65" cy="55" rx="13" ry="28"/><path d="M37 55H93M43 40Q65 50 87 40M43 70Q65 60 87 70M65 83V97M49 98H81"/><path className="ghost" d="M110 49L128 79H92ZM104 81V99H130V81Z"/></> : <><path className="ghost" d="M25 32H135M25 60H135M25 88H135"/><circle cx="39" cy="32" r="4"/><circle cx="111" cy="60" r="4"/><circle cx="57" cy="88" r="4"/><path d="M43 32Q89 25 107 56M107 64Q82 93 61 88"/><path d="M49 31H72M118 59H133M67 87H94"/></>;
      break;
    case 'robinhood':
      shapes = second ? <><ellipse cx="46" cy="42" rx="25" ry="19"/><circle cx="36" cy="42" r="7"/><circle cx="55" cy="42" r="7"/><g transform="translate(105 74) rotate(-35)"><rect x="-23" y="-11" width="30" height="20" rx="10"/><rect className="paper" x="-2" y="-11" width="30" height="20" rx="10"/><path d="M-4 -6H4"/></g><path className="ghost" d="M24 79H62M24 87H51M92 30H133M92 38H117"/></> : <><path className="ghost" d="M18 100H144M18 84L80 109L144 84M18 65L80 90L144 65"/><path d="M33 82V48L49 39L65 48V94M33 48L49 57L65 48M49 57V89M71 82V23L86 15L102 23V82M71 23L86 32L102 23M86 32V89M108 94V59L124 50L139 59V82M108 59L124 68L139 59M124 68V90"/><path className="ghost" d="M39 58L45 62M39 68L45 72M77 37L82 40M77 48L82 51M77 59L82 62M114 70L119 73"/></>;
      break;
    case 'new-generation':
      shapes = second ? <><path className="ghost" d="M20 60L120 24M20 60L120 96"/><circle cx="20" cy="60" r="3"/><path d="M70 41V79M89 34V86M113 25V95"/><path d="M65 41H75M65 79H75M84 34H94M84 86H94M108 25H118M108 95H118"/><path className="ghost" d="M132 25V95M127 25H137M127 95H137"/><path d="M30 56Q32 60 30 64"/></> : <><rect x="22" y="38" width="23" height="50" rx="3"/><rect x="58" y="28" width="30" height="60" rx="5"/><rect x="103" y="16" width="36" height="72" rx="8"/><path className="ghost" d="M22 101H45M22 97V105M45 97V105M58 101H88M58 97V105M88 97V105M103 101H139M103 97V105M139 97V105M46 57H57M89 57H102"/></>;
      break;
    case 'speakeasy':
      shapes = second ? <><g transform="translate(21 50)"><rect width="5" height="20"/><rect x="9" width="5" height="20"/><rect x="18" width="5" height="20"/></g><g opacity=".4"><Arrow d="M51 60H78" end="M73 55L78 60L73 65"/></g><path d="M57 51L73 69M73 51L57 69"/><g className="ghost"><rect x="88" y="29" width="13" height="62"/><rect x="111" y="29" width="13" height="62"/><rect x="134" y="29" width="13" height="62"/></g></> : <><rect x="40" y="29" width="20" height="62"/><rect x="68" y="29" width="20" height="62"/><rect x="96" y="29" width="20" height="62"/><path className="ghost" d="M40 103H116M40 99V107M116 99V107M61 20H67M89 20H95"/></>;
      break;
    case 'granola':
      shapes = second ? <><path className="ghost" d="M36 17L128 30L116 105L25 92Z"/><path d="M25 34L115 22L129 92L39 104Z"/><path d="M32 73L60 45L83 72L110 45L121 84L43 94Z" fill={'url(#'+hatch+')'}/><circle className="paper" cx="80" cy="57" r="22"/><path d="M58 57H102M80 35Q62 57 80 79M80 35Q98 57 80 79"/><path d="M91 87L107 83L110 92L94 96Z"/></> : <><path className="ghost" d="M25 19V103"/>{[26,48,70,92].map((y,i) => <g key={y}><circle cx="25" cy={y} r="3" className="paper"/><path d={'M39 '+y+'H'+[118,98,130,85][i]}/><path className="ghost" d={'M39 '+(y+6)+'H'+[92,115,104,63][i]}/></g>)}</>;
      break;
    case 'comet':
      shapes = <><rect x="22" y="19" width="116" height="82" rx="4"/><path d="M22 33H138M31 26H44"/>{second ? <><path d="M39 85L59 50H101L121 85Z"/><path className="ghost" d="M59 50L39 38M101 50L121 38M59 50V73M101 50V73M39 85L59 73H101L121 85"/><path d="M70 68Q80 56 90 68"/></> : <><path className="ghost" d="M38 34V100M55 34V100M72 34V100M89 34V100M106 34V100M123 34V100M23 50H137M23 67H137M23 84H137"/><path d="M61 48L100 87M100 48L61 87"/></>}</>;
      break;
    case 'langchain':
      shapes = second ? <><path d="M80 16V40M80 40L40 57M80 40L120 57M40 57V77M120 57V77M40 77H21V101M40 77H59V101M120 77H101V101M120 77H139V101"/><rect x="17" y="47" width="46" height="30" rx="2" fill={'url(#'+hatch+')'}/><rect x="97" y="47" width="46" height="30" rx="2" fill={'url(#'+stripes+')'}/><path className="ghost" d="M17 104H63M97 104H143"/></> : <><rect x="39" y="39" width="82" height="42"/><path className="ghost" d="M24 25H136V95H24ZM39 17H121M39 13V21M121 13V21M145 39V81M141 39H149M141 81H149"/><path d="M65 53H95M65 64H88"/></>;
      break;
    case 'irys':
      shapes = second ? <><path className="ghost" d="M20 94H140M28 89V99M80 89V99M132 89V99"/><g transform="translate(27 55) rotate(-18)"><path d="M-15 -15H15V15H-15Z" fill={'url(#'+hatch+')'}/></g><g transform="translate(80 45)"><path d="M-15 -15H15V15H-15Z" fill={'url(#'+hatch+')'}/></g><g transform="translate(132 55) rotate(18)"><path d="M-15 -15H15V15H-15Z" fill={'url(#'+hatch+')'}/></g></> : <><path className="ghost" d="M31 30L103 20L114 89L42 99Z"/><path d="M42 38H123V92H42Z" fill={'url(#'+hatch+')'}/><path className="paper" d="M25 53L57 43L68 75L36 85Z"/><path d="M82 39L109 31L114 52L89 59Z" fill={'url(#'+stripes+')'}/></>;
      break;
    case 'mailchimp':
      shapes = second ? <><path d="M27 100V80L17 66M27 80L39 66M20 69L47 82L36 69"/><path strokeDasharray="3 6" d="M48 81Q70 13 128 53"/><circle cx="128" cy="53" r="6"/><path className="ghost" d="M63 40Q57 27 70 25Q78 9 91 23Q105 19 107 32M100 84Q99 72 111 73Q118 61 128 73Q140 71 142 82"/></> : <><rect x="32" y="30" width="96" height="58" rx="3"/><path d="M33 32L80 63L127 32"/><circle cx="113" cy="84" r="17" className="paper"/><path d="M104 84L110 90L122 77"/></>;
      break;
    case 'aave':
      shapes = second ? <><path className="ghost" d="M24 30H137M24 60H137M24 90H137"/><circle cx="54" cy="30" r="5" className="paper"/><circle cx="114" cy="60" r="5" className="paper"/><circle cx="77" cy="90" r="5" className="paper"/><path d="M25 19V41M25 49V71M25 79V101M136 19V41M136 49V71M136 79V101"/></> : <><rect className="ghost" x="30" y="18" width="100" height="84"/><rect x="52" y="39" width="56" height="42" rx="3"/><path d="M23 39H39M23 81H39M52 11V25M108 11V25M121 39H137M121 81H137M52 95V109M108 95V109"/><path className="ghost" d="M52 25V95M108 25V95M39 39H121M39 81H121"/></>;
      break;
    case 'cohere':
      shapes = second ? <><path d="M52 24L90 17L121 43L111 82L76 102L39 77L28 42ZM52 24L64 49L28 42M64 49L91 52L90 17M91 52L121 43M91 52L88 79L111 82M88 79L76 102M88 79L58 76L39 77M58 76L64 49"/><path className="ghost" d="M39 77L48 55L52 24M48 55L80 60L91 52M80 60L88 79"/></> : <><rect className="ghost" x="21" y="18" width="118" height="84" rx="3"/><path d="M21 44L44 34L65 44M44 34L53 18M65 44L98 41L118 22M98 41L113 67L139 61M113 67L103 102M113 67L80 77L55 67L21 77M55 67L45 102"/><rect x="49" y="45" width="62" height="29" rx="11" className="paper"/><path d="M61 59H99"/></>;
      break;
    case 'ramp':
      shapes = <>{[[17,34],[33,27],[49,20]].map(([x,y]) => <g key={x}><rect className="paper" x={x} y={y} width="38" height="54" rx="2"/><path d={'M'+(x+7)+' '+(y+12)+'H'+(x+30)+'M'+(x+7)+' '+(y+20)+'H'+(x+24)}/></g>)}<Arrow d="M94 58H119" end="M114 53L119 58L114 63"/>{Array.from({length: 6}, (_,i) => <g key={i} className={i === 1 ? '' : 'ghost'}><rect x={131+(i%3)*28} y={29+Math.floor(i/3)*34} width="21" height="25" rx="1"/><path d={'M'+(135+(i%3)*28)+' '+(47+Math.floor(i/3)*34)+'L'+(141+(i%3)*28)+' '+(37+Math.floor(i/3)*34)+'L'+(148+(i%3)*28)+' '+(47+Math.floor(i/3)*34)}/></g>)}<path d="M159 20L165 25L175 13"/><Arrow d="M212 58H239" end="M234 53L239 58L234 63"/><path d="M250 35V85H302V35M250 44H302M256 28H296V35"/><rect x="259" y="54" width="13" height="20" rx="1"/><rect x="280" y="54" width="13" height="20" rx="1"/></>;
      break;
    case 'zerion':
      shapes = <>{[0,1,2,3].map((level) => <g key={level} transform={'translate('+(8+level*80)+' 0)'}><path d="M7 83L18 33L34 31L65 51L55 83Z" fill={level > 0 ? 'url(#'+hatch+')' : 'none'}/><path d="M7 83L34 31M7 83L65 51M7 83H55"/>{level > 1 && <><circle className="paper" cx="47" cy="48" r="11"/><path className="paper" d="M20 54L35 44L40 62L25 71Z"/></>}{level === 3 && <><path className="paper" d="M36 70L52 61L67 70V90L52 99L36 90Z"/><path d="M36 70L52 79L67 70M52 79V99"/></>}<path className="ghost" d="M7 105H65"/></g>)}</>;
      break;
    case 'turbopuffer':
      shapes = second ? <><rect x="15" y="23" width="67" height="73" rx="3"/><path className="ghost" d="M15 36H82"/><path d="M28 60Q28 43 48 44Q68 44 68 60Q68 76 48 76Q28 76 28 60Z"/><path className="ghost" d="M30 85H67"/><path d="M101 32H143M101 44H134M101 56H140M101 68H128M101 80H143M101 92H134"/></> : <><path className="ghost" d="M25 20H119V102H25Z"/><path d="M40 60Q40 37 70 38Q100 38 100 60Q100 83 70 83Q40 83 40 60Z"/><path d="M49 46Q63 40 65 51Q65 60 53 61Q43 59 49 46ZM79 65Q81 53 94 59Q101 66 92 74Q79 78 79 65Z" fill="currentColor" stroke="none"/><path className="paper" d="M99 78V68H109V58H119V68H129V78H119V88H109V78Z"/></>;
      break;
    case 'github':
      shapes = second ? <><path opacity=".6" strokeDasharray="3 5" d="M24 35Q40 4 57 35T90 35T123 35"/><circle cx="58" cy="35" r="8"/><path d="M132 29L138 35L148 21"/><path opacity=".6" strokeDasharray="3 5" d="M24 85Q40 54 57 85T90 85T123 85"/><path d="M42 84H74M46 91H68M133 78L145 90M145 78L133 90"/></> : <><rect x="20" y="23" width="45" height="30" rx="2"/><rect x="96" y="23" width="45" height="30" rx="2"/><Arrow d="M73 38H88" end="M83 33L88 38L83 43"/><rect x="20" y="77" width="36" height="18" rx="8"/><path className="ghost" d="M60 82L91 69M60 91L91 103"/><rect x="96" y="66" width="45" height="38" rx="7"/><path d="M106 79H131M106 89H124"/></>;
      break;
    case 'cash-app':
      shapes = second ? <><rect className="ghost" x="16" y="23" width="37" height="76" rx="3"/><circle cx="34" cy="43" r="10"/><path d="M23 63H46M23 71H42M23 87H46"/><rect className="ghost" x="62" y="23" width="37" height="76" rx="3"/><circle cx="80" cy="60" r="10"/><path d="M69 81H92M72 88H89"/><rect className="ghost" x="108" y="23" width="37" height="76" rx="3"/><circle cx="120" cy="45" r="5"/><path d="M130 43H138M130 49H136M115 67H138M115 76H136"/></> : <><circle cx="49" cy="41" r="17"/><path d="M94 24L121 40L108 62L81 46Z"/><path d="M35 84L51 66L68 84L51 101Z"/><path d="M88 93V77Q88 68 97 68H112Q121 68 121 77V93ZM96 68V62Q105 51 114 62V68"/></>;
      break;
    default:
      return null;
  }

  return <svg viewBox={wide ? '0 0 320 120' : '0 0 160 120'} aria-hidden="true" className="diagram-svg">
    <defs>
      <pattern id={hatch} width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".7" fill="currentColor"/></pattern>
      <pattern id={stripes} width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 6L6 0" fill="none" stroke="currentColor" opacity=".35"/></pattern>
    </defs>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{shapes}</g>
  </svg>;
}

export function Figure({ kind, labels, quietCaption = false }: { kind: string; labels: [string, string]; quietCaption?: boolean }) {
  if (!illustratedKinds.has(kind)) return null;
  const continuous = continuousKinds.has(kind);
  return <figure className="case-figure" aria-label={labels.join('; ')}>
    {continuous ? <div className="diagram-panel">
      <Drawing kind={kind} wide/>
      <div className="diagram-pair">{labels.map((label,i) => <p className="fomo-figure-label" key={i}>{label}</p>)}</div>
    </div> : <div className="diagram-pair">{labels.map((label,i) => <div className="diagram-panel" key={i}>
      <Drawing kind={kind} second={i === 1}/><p className="fomo-figure-label">{label}</p>
    </div>)}</div>}
    <figcaption className={quietCaption ? 'sr-only' : 'fomo-doc-caption muted'} lang="en">Editorial schematic, not original artwork</figcaption>
  </figure>;
}

