'use client';
import {useState} from 'react'; import Link from 'next/link'; import {useCart} from './Cart';
export default function AddToCart({p}){const {add}=useCart();const [size,setSize]=useState(p.sizes?'M':'One size');const [ok,setOk]=useState(false);
return(<div>{p.sizes&&<div className="opts" role="group" aria-label="Size">{p.sizes.map(s=><button key={s} className={s===size?'opt on':'opt'} onClick={()=>setSize(s)}>{s}</button>)}</div>}
<button className="btn" onClick={()=>{add({slug:p.slug,title:p.title,price:p.price,size});setOk(true);setTimeout(()=>setOk(false),2000)}}>{ok?'Added to cart':'Add to cart'}</button>{ok&&<> <Link href="/cart" className="lnk">View cart</Link></>}</div>)}
