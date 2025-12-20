import { Prisma, FoodMenuProduct } from "@prisma/client";
import prisma from "../db";

export async function createFoodMenuProduct(foodMenuProduct: Prisma.FoodMenuProductCreateInput): Promise<FoodMenuProduct>{
    console.log('💿 DAL - CREATE FOOD MENU PRODUCT');
    
    return await prisma.foodMenuProduct.create({ data: foodMenuProduct });
}

export async function deleteFoodMenuProduct(id: string){
    console.log('💿 DAL - DELETE FOOD MENU PRODUCT', id);

    return await prisma.foodMenuProduct.delete({ where: { id: id } });
}

export async function fetchVisibleFoodMenuProducts(){
    console.log('📡 DAL - FETCH FOOD MENU PRODUCTS');

    const res = await fetch('/central/cardapio/visualizacao/api', { cache: 'no-store' });

    if (!res.ok) throw new Error("fetch failed");

    const data = await res.json();

    return data as FoodMenuProduct[];
}

export async function getFoodMenuProduct(id: string){
    console.log('💿 DAL - GET FOOD MENU PRODUCT', id);
    
    return await prisma.foodMenuProduct.findFirst({ where: { id: id } });
}

export async function getFoodMenuProducts(){
    console.log('💿 DAL - GET FOOD MENU PRODUCTS');
    
    return await prisma.foodMenuProduct.findMany({
        orderBy: {
            name: 'asc'
        }
    });
}

export async function updateFoodMenuProduct(id: string, foodMenuProductData: Prisma.FoodMenuProductUpdateInput) {
    console.log('💿 DAL - UPDATE FOOD MENU PRODUCT', id, foodMenuProductData);

    return await prisma.foodMenuProduct.update({ 
        data: foodMenuProductData,
        where: {
            id: id
        } 
    });
}