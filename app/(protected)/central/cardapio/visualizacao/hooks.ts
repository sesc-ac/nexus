import { useState, useEffect, useMemo } from 'react';
import { FoodMenuProduct } from "@prisma/client";
import { fetchVisibleFoodMenuProducts } from '@/app/data-access/foodMenuProduct';
import { buildProductArrays } from './domain';

export function useRotatingList(
    intervalMs: number,
    maximumSize: number = 7
): [category: string, currentArray: FoodMenuProduct[], intervalMs: number] {
    console.log('HOOK - USE ROTATING LIST');

    const [products, setProducts] = useState<FoodMenuProduct[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await fetchVisibleFoodMenuProducts();
            setProducts(fetchedProducts);
        }
        
        loadProducts();
        
        const interval = setInterval(() => {
            loadProducts();
        }, intervalMs);

        return () => clearInterval(interval);
    }, [intervalMs]);

    const categories = useMemo(() => {
        if (products.length === 0) return [];
        return buildProductArrays(products, maximumSize);
    }, [products, maximumSize]);

    const flatList = useMemo(() => 
        categories.flatMap(category => 
            category.arrays.map(array => ({ category: category.category, array }))
        ),
        [categories]
    );

    useEffect(() => {
        if(flatList.length === 0) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % flatList.length);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [flatList.length, intervalMs]);

    const current = flatList[index];
    const category = current?.category ?? '';
    const currentArray = current?.array ?? [];

    return [category, currentArray, intervalMs];
}