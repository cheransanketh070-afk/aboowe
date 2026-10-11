import Link from 'next/link'; import {products} from '@/lib/products'; import Card from '@/components/Card';
export default function Home(){return(<>
<section className="hero"><div className="wrap"><h1>Aboowe.<br/>Say it like you mean home.</h1><p>Everyday pieces carrying Somali heritage, made when you order and sent anywhere.</p><Link className="btn" href="/shop">Shop the collection</Link></div><div className="sun" aria-hidden="true"/></section>
<section className="wrap sec"><h2>New and notable</h2><div className="grid">{[0,2,5,7,12,17,9,3].map(i=><Card key={i} p={products[i]}/>)}</div></section>
<section className="band"><div className="wrap trio"><div><h3>Made to order</h3><p>Nothing sits in a warehouse. Each piece is made for you.</p></div><div><h3>Ships worldwide</h3><p>Tracked delivery in 5 to 12 business days.</p></div><div><h3>Easy returns</h3><p>Misprints and damage are replaced at no cost.</p></div></div></section></>)}
