'use client';
import Link from 'next/link'; import {useCart} from './Cart';
export default function Header(){const {count}=useCart();return(<header className="hdr"><nav className="wrap row"><Link href="/" className="logo">ABOOWE</Link><div className="links"><Link href="/shop">Shop</Link><Link href="/about">Story &amp; policies</Link><Link href="/cart">Cart ({count})</Link></div></nav></header>)}
