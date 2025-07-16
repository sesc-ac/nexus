import { Prisma, Synchronization } from "@prisma/client";
import prisma from "../db";

export async function createSynchronization(synchronization: Prisma.SynchronizationCreateInput): Promise<Synchronization>{
    console.log('💿 DAL - CREATE SYNCHRONIZATION', synchronization);

    return await prisma.synchronization.create({ data: synchronization });
}

export async function getSynchronizations(): Promise<Synchronization[]>{
    console.log('💿 DAL - GET SYNCHRONIZATIONS');

    return await prisma.synchronization.findMany({ orderBy: { createdAt: 'desc' } });
}