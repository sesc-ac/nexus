'use client'

import { FoodMenuProduct } from '@prisma/client';
import styles from './MenuTable.module.css';
import Flexbox from '@/app/ui/Flexbox';
import { valueToCurrency } from '@/app/utils/dataFormat';
import { useEffect, useRef, useState } from 'react';

export default function MenuTable({
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
        <table className={ styles.foodTable }>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Comericário</th>
                    <th>Conveniado</th>
                    <th>Empresário</th>
                    <th>Público Geral</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product: FoodMenuProduct) => (
                    <tr key={ product.id }>
                        <td>
                            <Flexbox column gapSm>
                                <p>{ product.name }</p>
                                {product ? <p className="normal">{ product.description }</p> : null}
                            </Flexbox>
                        </td>

                        <td className={ styles.priceColumn }>{ valueToCurrency(product.comerciarioPrice) }</td>
                        <td className={ styles.priceColumn }>{ valueToCurrency(product.conveniadoPrice) }</td>
                        <td className={ styles.priceColumn }>{ valueToCurrency(product.empresarioPrice) }</td>
                        <td className={ styles.priceColumn }>{ valueToCurrency(product.publicoPrice) }</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}