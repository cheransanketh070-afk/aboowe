import Link from 'next/link'; import Mockup from './Mockup';
export default function Card({p}){return(<Link href={'/products/'+p.slug} className="card"><Mockup p={p}/><h3>{p.title}</h3><p>${p.price.toFixed(2)}</p></Link>)}
