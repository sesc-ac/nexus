import { Prisma, Product } from "@prisma/client";
import prisma from "../db";

export async function createProduct(product: Prisma.ProductCreateInput): Promise<Product>{
    console.log('DAL CREATE PRODUCT');
    
    return await prisma.product.create({ data: product });
}

export async function getProduct(id: string){
    console.log('DAL GET PRODUCT', id);
    
    return await prisma.product.findFirst({ where: { id: id } });
}

export async function getProductByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Product | null>{
    console.log('DAL GET PRODUCT BY LEGACY ID', legacyId, legacyOriginDatabase);
    
    return await prisma.product.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}

export async function getProducts(){
    console.log('DAL GET PRODUCTS');
    
    return await prisma.product.findMany({
        orderBy: {
            description: 'asc'
        }
    });
}

export async function updateProduct(id: string, productData: Prisma.ProductUpdateInput) {
    console.log('DAL UPDATE PRODUCT', id, productData);

    return await prisma.product.update({ 
        data: productData,
        where: {
            id: id
        } 
    });
}