'use client'

import { FoodMenuProduct } from '@prisma/client';
import styles from './FoodMenuList.module.css';
import { valueToCurrency } from '@/app/utils/dataFormat';
import { useEffect, useRef, useState } from 'react';
import { fetchVisibleFoodMenuProducts } from '@/app/data-access/foodMenuProduct';

function foodMenu(){

}

export default function FoodMenuList(){
    const [products, setProducts] = useState<FoodMenuProduct[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<FoodMenuProduct[][]>([]);

    async function fetchProducts(){
        console.log('📡 FETCH PRODUCTS');

        const res = await fetch('/central/cardapio/visualizacao/api', { cache: 'no-store' });

        if (!res.ok) throw new Error("fetch failed");

        const data = await res.json();
        setProducts(data);
    }

    async function groupProducts(){
        console.log('🔄 GROUP PRODUCTS');

        const visibleCategories = [...new Set(products.map(product => product.category))];

        // console.table(products);
        console.table(visibleCategories);

        // visibleCategories.forEach(category => {
        //     console.log(category);
        //     console.table(products.filter(product => product.category == category))
        // })

        const groupedProductsByCategory = products.reduce<Record<string, FoodMenuProduct[]>>((acc, product) => {
            if (!acc[product.category]) 
                acc[product.category] = [];
            
            
            acc[product.category].push(product);
            return acc;
        }, {});

        console.log(groupedProductsByCategory);

        function chunkArray(array: FoodMenuProduct[], size: number){
            const chunks = [];
            
            for (let i=0; i < array.length; i += size){
                chunks.push(array.slice(i, i + size));
            }

            return chunks;
        }

        const groupedAndChunked = Object.values(groupedProductsByCategory).flatMap(categoryProducts => chunkArray(categoryProducts, 7));

        console.log(groupedAndChunked);
        setVisibleProducts(groupedAndChunked);
    }

    useEffect(() => {
        console.log('🧩 COMPONENT EFFECT 1');

        fetchProducts();

        return () => {};
    }, []);

    useEffect(() => {
        console.log('🧩 COMPONENT EFFECT 2');

        if(products.length)
            groupProducts();

    }, [products]);
    

    return (
        <ul className={ styles.foodMenuList }>
            {products.map((product: FoodMenuProduct) => (
                <li className={ styles.foodMenuItem } key={ product.id }>
                    <div className={ styles.itemName }>
                        <p>{ product.name }</p>
                        <p>{ product.description }DESCRICAO DESCRICAO DESCRICAO DESCRICAO DESCRICAO DESCRICAO DESCRICAO DESCRICAO</p>
                    </div>

                    <p className={`${ styles.itemPrice } ${ styles.comerciario }`}><b>{ valueToCurrency( product.comerciarioPrice ) }</b></p>
                    <p className={ styles.itemPrice }><b>{ valueToCurrency( product.publicoPrice ) }</b></p>
                </li>
            ))}
        </ul>
        // <ul className={ styles.menuList }>
        //     {products.map((product: FoodMenuProduct) => (
        //         <li key={ product.id }>
        //             <Flexbox spaceBetween>
        //                 <Flexbox
        //                     column
        //                 >
        //                     <p className='lg upper'><b>{ product.name }</b></p>
        //                     <p className='md'><b>{ product.description }</b></p>
        //                 </Flexbox>

        //                 <Flexbox gapLg>
        //                     <Flexbox 
        //                         alignCenter 
        //                         column
        //                         gapSm
        //                     >
        //                         <p className='lg'><b>{ valueToCurrency( product.comerciarioPrice ) }</b></p>
        //                         <p className={ styles.customerCategory }><b>Comerciário</b></p>
        //                     </Flexbox>

        //                     <Flexbox 
        //                         alignCenter
        //                         column
        //                         gapSm
        //                     >
        //                         <p className='lg'><b>{ valueToCurrency(product.publicoPrice) }</b></p>
        //                         <p className={ styles.customerCategory }><b>Demais Categorias</b></p>
        //                     </Flexbox>
        //                 </Flexbox>
        //             </Flexbox>
        //         </li>
        //     ))}
        // </ul>
    );
}