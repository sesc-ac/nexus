import { Prisma, Product } from "@prisma/client";
import prisma from "../db";

export async function createProduct(product: Prisma.ProductCreateInput): Promise<Product>{
    return await prisma.product.create({ data: product });
}

export async function getProductByLegacyId(legacyId: number){
    return await prisma.product.findUnique({
        where: {
            legacyId: legacyId
        }
    });
}