'use client';
import {useState} from 'react'; import Card from './Card'; import {cats} from '@/lib/products';
export default function ShopGrid({products}){const [c,setC]=useState('All');const list=c==='All'?products:products.filter(p=>p.cat===c);
return(<><div className="opts">{cats.map(x=><button key={x} className={x===c?'opt on':'opt'} onClick={()=>setC(x)}>{x}</button>)}</div><div className="grid">{list.map(p=><Card key={p.slug} p={p}/>)}</div></>)}
