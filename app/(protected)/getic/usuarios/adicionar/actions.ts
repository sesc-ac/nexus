'use server'

import { createUser } from "@/app/data-access/user";
import { hash } from "@/app/lib/bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function createUserAction(previousState: any, formData: FormData){
    console.log('🔁 ACTION - CREATE USER');
    
    const name = formData.get('name') as string;
    const cpf = formData.get('cpf') as string;
    const password = formData.get('password') as string;

    const hashedPassowd = await hash(password);

    const user = await createUser({
        name: name,
        cpf: cpf,
        password: hashedPassowd
    });

    revalidatePath('/getic/ususarios');
    redirect(`/getic/usuarios/${user.id}`);
}