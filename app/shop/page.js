import {products} from '@/lib/products'; import ShopGrid from '@/components/ShopGrid';
export const metadata={title:'Shop'};
export default function Shop(){return(<section className="wrap sec"><h1>Shop</h1><ShopGrid products={products}/></section>)}
