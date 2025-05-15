import { Prisma, CustomerCategory } from "@prisma/client";
import prisma from "../db";

export async function createCustomerCategory(customerCategory: Prisma.CustomerCategoryCreateInput): Promise<CustomerCategory>{
    return await prisma.customerCategory.create({ data: customerCategory });
}

export async function getCustomerCategoryByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<CustomerCategory | null>{
    return await prisma.customerCategory.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}