import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";
import Form from "next/form";
import { UserForm } from "./components/UserForm";
import Link from "next/link";
import { Button } from "@/app/ui/Button";
import { getUsers } from "@/app/data-access/user";
import { User } from "@prisma/client";

export default async function Page() {
    console.log('📄 PAGE - ADICIONAR USUÁRIO');

    return (
        <>
            <UserForm />
        </>
    );
}