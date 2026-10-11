import {products} from '@/lib/products'; import {SITE} from '@/lib/config';
export default function sitemap(){return[{url:SITE.url},{url:SITE.url+'/shop'},{url:SITE.url+'/about'},...products.map(p=>({url:`${SITE.url}/products/${p.slug}`}))]}
