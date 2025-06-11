import { Prisma, CustomerCategory } from "@prisma/client";
import prisma from "../db";

export async function createCustomerCategory(customerCategory: Prisma.CustomerCategoryCreateInput): Promise<CustomerCategory>{
    console.log('CREATE CUSTOMER CATEGORY DAL', customerCategory);

    return await prisma.customerCategory.create({ data: customerCategory });
}

export async function getCustomerCategoryByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<CustomerCategory | null>{
    console.log('GET CUSTOMER CATEGORY BY LEGACY ID DAL', legacyId, legacyOriginDatabase);

    return await prisma.customerCategory.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}