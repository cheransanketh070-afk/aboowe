'use client';
import Link from 'next/link'; import {useState} from 'react'; import {useCart} from '@/components/Cart'; import {SITE} from '@/lib/config';
export default function CartPage(){const {lines,setQty,total,clear}=useCart();const [f,setF]=useState({name:'',email:'',address:''});
const on=k=>e=>setF({...f,[k]:e.target.value});
function send(e){e.preventDefault();const body=`Order request\n\n${lines.map(l=>`${l.qty} x ${l.title} (${l.size}) - $${(l.qty*l.price).toFixed(2)}`).join('\n')}\n\nSubtotal: $${total.toFixed(2)}\n\nName: ${f.name}\nEmail: ${f.email}\nShip to: ${f.address}`;window.location.href=`mailto:${SITE.email}?subject=${encodeURIComponent('ABOOWE order request')}&body=${encodeURIComponent(body)}`}
if(!lines.length)return <section className="wrap sec"><h1>Your cart is empty</h1><Link className="btn" href="/shop">Browse the shop</Link></section>;
return(<section className="wrap sec narrow"><h1>Cart</h1>{lines.map(l=><div className="line" key={l.key}><div><b>{l.title}</b><br/><small>{l.size}</small></div><div className="qty"><button onClick={()=>setQty(l.key,l.qty-1)} aria-label="Decrease">−</button>{l.qty}<button onClick={()=>setQty(l.key,l.qty+1)} aria-label="Increase">+</button></div><div>${(l.price*l.qty).toFixed(2)}</div></div>)}
<p className="tot">Subtotal ${total.toFixed(2)}</p><small>Shipping is confirmed when we reply to your order.</small>
{SITE.payLink&&<p><br/><a className="btn" href={SITE.payLink}>Pay now</a></p>}
<form onSubmit={send} className="form"><h2>Send your order</h2><label>Name<input required value={f.name} onChange={on('name')}/></label><label>Email<input required type="email" value={f.email} onChange={on('email')}/></label><label>Shipping address<textarea required rows="3" value={f.address} onChange={on('address')}/></label><button className="btn">Send order request</button> <button type="button" className="lnk" onClick={clear}>Empty cart</button></form></section>)}
