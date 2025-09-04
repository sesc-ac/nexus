import { Prisma, User } from "@prisma/client";
import prisma from "../db";

export async function createUser(user: Prisma.UserCreateInput): Promise<User> {
    console.log('💿 DAL - CREATE CASHIER', user.name);

    return prisma.user.create({ data: user });
}

export async function getUser(id: string): Promise<User | null>{
    console.log('💿 DAL - GET USER', id);

    return await prisma.user.findUnique({ where: { id: id } });
}

export async function getUserByCpf(cpf: string): Promise<User | null>{
    console.log('💿 DAL - GET USER BY CPF', cpf);

    return await prisma.user.findUnique({ where: { cpf: cpf } });
}

export async function getUsers(): Promise<User[]>{
    console.log('💿 DAL - GET USERS');

    return await prisma.user.findMany({ orderBy: { name: 'asc' } });
}