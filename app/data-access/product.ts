import { Prisma, Product } from "@prisma/client";
import prisma from "../db";

export async function createProduct(product: Prisma.ProductCreateInput): Promise<Product>{
    console.log('CREATE PRODUCT DAL');
    
    return await prisma.product.create({ data: product });
}

export async function getProduct(id: string){
    console.log('GET PRODUCT DAL', id);
    
    return await prisma.product.findFirst({ where: { id: id } });
}

export async function getProductByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Product | null>{
    console.log('GET PRODUCT BY LEGACY ID DAL', legacyId, legacyOriginDatabase);
    
    return await prisma.product.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}

export async function getProducts(){
    console.log('GET PRODUCTS DAL');
    
    return await prisma.product.findMany({
        orderBy: {
            description: 'asc'
        }
    });
}

export async function updateProduct(id: string, productData: Prisma.ProductUpdateInput) {
    console.log('UPDATE PRODUCT DAL', id, productData);

    return await prisma.product.update({ 
        data: productData,
        where: {
            id: id
        } 
    });
}