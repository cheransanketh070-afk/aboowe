import {notFound} from 'next/navigation'; import {products,find} from '@/lib/products'; import Mockup from '@/components/Mockup'; import AddToCart from '@/components/AddToCart'; import Card from '@/components/Card';
export const dynamicParams=false;
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export function generateMetadata({params}){const p=find(params.slug);return p?{title:p.title,description:p.desc}:{}}
export default function Page({params}){const p=find(params.slug);if(!p)notFound();
const ld={'@context':'https://schema.org','@type':'Product',name:p.title,description:p.desc,brand:{'@type':'Brand',name:'ABOOWE'},offers:{'@type':'Offer',price:p.price,priceCurrency:'USD',availability:'https://schema.org/InStock'}};
return(<><section className="wrap sec pdp"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/><Mockup p={p}/>
<div className="info"><h1>{p.title}</h1><p className="price">${p.price.toFixed(2)}</p><p>{p.desc}</p><AddToCart p={p}/><p className="small dark">Made to order. Ships in 5 to 12 business days.</p></div></section>
<section className="wrap sec"><h2>You may also like</h2><div className="grid">{products.filter(x=>x.cat===p.cat&&x.slug!==p.slug).slice(0,4).map(x=><Card key={x.slug} p={x}/>)}</div></section></>)}
