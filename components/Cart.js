'use client';
import {createContext,useContext,useEffect,useState} from 'react';
const C=createContext({lines:[],count:0,total:0,add(){},setQty(){},clear(){}}); export const useCart=()=>useContext(C);
export function CartProvider({children}){
  const [lines,setLines]=useState([]);
  useEffect(()=>{try{setLines(JSON.parse(localStorage.getItem('aboowe-cart')||'[]'))}catch(e){}},[]);
  const save=l=>{setLines(l);try{localStorage.setItem('aboowe-cart',JSON.stringify(l))}catch(e){}};
  const add=x=>{const k=x.slug+'|'+x.size;const f=lines.find(l=>l.key===k);save(f?lines.map(l=>l===f?{...l,qty:l.qty+1}:l):[...lines,{...x,key:k,qty:1}])};
  const setQty=(k,q)=>save(lines.map(l=>l.key===k?{...l,qty:q}:l).filter(l=>l.qty>0));
  const clear=()=>save([]);
  const count=lines.reduce((a,l)=>a+l.qty,0),total=lines.reduce((a,l)=>a+l.qty*l.price,0);
  return <C.Provider value={{lines,add,setQty,clear,count,total}}>{children}</C.Provider>;
}
