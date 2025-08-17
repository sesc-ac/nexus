'use client'

import { FoodMenuProduct } from '@prisma/client';
import styles from './MenuList.module.css';
import Flexbox from '@/app/ui/Flexbox';
import { valueToCurrency } from '@/app/utils/dataFormat';
import { useEffect, useRef, useState } from 'react';

export default function MenuList({
    category
}: { 
    category: string
 }){
    const [products, setProducts] = useState<FoodMenuProduct[]>([]);
    const intervalRef = useRef<number | number>(null);

    async function fetchProducts(){
        console.log('💿 FETCH PRODUCTS');

        const res = await fetch('/nutricao/cardapio/visualizacao/api', { cache: 'no-store' });

        if (!res.ok) throw new Error("fetch failed");

        const data = await res.json();
        setProducts(data.filter((product: FoodMenuProduct) => product.category === category));
    }

    useEffect(() => {
        console.log('🧩 COMPONENT EFFECT');
        function handleVisibility(){
            if(document.visibilityState === 'visible') fetchProducts();
        }

        document.addEventListener('visibilitychange', handleVisibility);

        intervalRef.current = window.setInterval(fetchProducts, 2000);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility);

            if(intervalRef.current){
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, []);
    

    return (
        <ul>
            {products.map((product: FoodMenuProduct) => (
                <li key={ product.id }>
                    <Flexbox spaceBetween>
                        <p>{ product.name }</p>

                        <Flexbox>
                            <p>{ valueToCurrency( product.comerciarioPrice ) }</p>
                            <p>{ valueToCurrency(product.publicoPrice) }</p>
                        </Flexbox>
                    </Flexbox>
                </li>
            ))}
        </ul>
    );
}