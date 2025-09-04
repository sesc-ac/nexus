'use server';

import { createSession } from "@/app/data-access/session";
import { getUserByCpf } from "@/app/data-access/user";
import { compare } from "@/app/lib/bcrypt";
import { redirect } from "next/navigation";

export async function loginAction(previousState: any, formData: FormData){
    console.log('🔁 ACTION - LOGIN');

    const cpf = formData.get('cpf') as string;

    const user = await getUserByCpf(cpf);

    if(!user) return { userNotFound: 'CPF não cadastrado' };

    const password = formData.get('password') as string;

    const validPassword = await compare(password, user.password);

    if(!validPassword) return { invalidPassword: 'Senha incorreta' };

    await createSession({ user: { connect: { id: user.id } } });

    redirect('/');
}