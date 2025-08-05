import { Button } from "@/app/ui/Button";
import { Input } from "@/app/ui/Input";
import Form from "next/form";

export default function Page() {
    return (
        <Form action="/">
            <label htmlFor="">Usuário</label>
            <Input
                id=""
                name="" 
                required
                type=""
            />

            <label htmlFor="">Senha</label>
            <Input
                id=""
                name="" 
                required
                type=""
            />

            <Button>Entrar</Button>
        </Form>
    );
}