import { verifySession } from "@/app/lib/auth";
import { LoginForm } from "./components/LoginForm";
import { redirect } from "next/navigation";

export default async function Page() {
    console.log('📄 PAGE - LOGIN');

    const session = await verifySession();

    if(session) redirect('/');

    return <LoginForm />;
}