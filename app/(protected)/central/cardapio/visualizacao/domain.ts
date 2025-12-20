import { FoodMenuProduct } from "@prisma/client";

export function buildProductArrays(products: FoodMenuProduct[], maximumSize = 8){
    console.log('DOMAIN - BUILD PRODUCT ARRAYS');

    const grouped = groupProductsByCategory(products);

    return Object.entries(grouped)
    .map(([category, products]) => ({
        category,
        arrays: chunkProductsArray(products, maximumSize),
    }));

    // return Object.values(grouped).flatMap(categoryProducts => chunkProductsArray(categoryProducts, maximumSize));
}

export function chunkProductsArray(products: FoodMenuProduct[], size: number){
    console.log('DOMAIN - CHUNK PRODUCTS ARRAY');

    const chunks = [];
            
    for (let i=0; i < products.length; i += size){
        chunks.push(products.slice(i, i + size));
    }

    return chunks; 
}

export function groupProductsByCategory(products: FoodMenuProduct[]){
    console.log('DOMAIN - GROUP PRODUCTS BY CATEGORY');

    return products.reduce<Record<string, FoodMenuProduct[]>>((acc, product) => {
        acc[product.category] ??= [];

        acc[product.category].push(product);

        return acc;
    }, {});
}