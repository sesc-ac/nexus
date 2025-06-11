import { Prisma, Customer } from "@prisma/client";
import prisma from "../db";

export async function createCustomer(customer: Prisma.CustomerCreateInput): Promise<Customer>{
    console.log('CREATE CUSTOMER DAL', customer);

    return await prisma.customer.create({ data: customer });
}

export async function getCustomerByLegacyId(legacyId: number, legacyUnitId: number){
    console.log('GET CUSTOMER BY LEGACY ID DAL', legacyId, legacyUnitId);

    return await prisma.customer.findFirst({
        where: {
            legacyId: legacyId,
            legacyUnitId,
        }
    });
}