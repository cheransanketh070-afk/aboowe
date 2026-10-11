const shapes={
tee:<path d="M60 40 L90 30 Q100 45 110 30 L140 40 L172 78 L148 94 L140 84 L140 205 L60 205 L60 84 L52 94 L28 78 Z"/>,
hoodie:<><path d="M58 48 L88 36 L112 36 L142 48 L176 100 L152 116 L142 100 L142 205 L58 205 L58 100 L48 116 L24 100 Z"/><path d="M82 36 Q100 82 118 36 Q100 22 82 36Z" opacity=".35"/></>,
mug:<><rect x="56" y="80" width="84" height="96" rx="10"/><path d="M140 100 q36 0 36 30 t-36 30" fill="none" stroke="currentColor" strokeWidth="10"/></>,
tote:<><rect x="48" y="92" width="104" height="116" rx="4"/><path d="M76 92 Q76 40 100 40 T124 92" fill="none" stroke="currentColor" strokeWidth="8"/></>,
cap:<><path d="M48 150 Q48 70 100 70 Q152 70 152 150Z"/><path d="M140 150 Q188 148 188 164 L96 164Z" opacity=".6"/></>,
beanie:<><path d="M52 160 Q52 60 100 60 Q148 60 148 160Z"/><rect x="48" y="150" width="104" height="30" rx="8" opacity=".6"/></>,
poster:<rect x="42" y="30" width="116" height="170" rx="2"/>,
pillow:<rect x="36" y="56" width="128" height="128" rx="18"/>,
bottle:<><rect x="82" y="30" width="36" height="22" rx="6" opacity=".6"/><rect x="72" y="50" width="56" height="160" rx="16"/></>,
notebook:<><rect x="52" y="34" width="100" height="168" rx="6"/><rect x="52" y="34" width="12" height="168" rx="3" opacity=".4"/></>};
export default function Mockup({p}){
  const y={tee:116,hoodie:120,mug:132,tote:150,cap:118,beanie:112,poster:112,pillow:124,bottle:130,notebook:100}[p.type];
  return(<svg viewBox="0 0 200 240" role="img" aria-label={p.title+' mockup'} className="mock" style={{background:'linear-gradient(160deg,#EEF3F7,#D9E5EF)'}}>
  <g fill={p.bg} style={{color:p.bg}} stroke="rgba(0,0,0,.12)" strokeWidth="1">{shapes[p.type]}</g>
  <text x="100" y={y} textAnchor="middle" fill={p.fg} fontFamily="Arial Black,Arial,sans-serif" fontWeight="800" fontSize="15" letterSpacing="3">ABOOWE</text></svg>)}
