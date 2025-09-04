import Link from "next/link";
import { Button } from "@/app/ui/Button";
import { getUsers } from "@/app/data-access/user";
import { User } from "@prisma/client";
import Flexbox from "@/app/ui/Flexbox";
import Box from "@/app/ui/Box";

export default async function Page() {
    console.log('📄 PAGE - USUÁRIOS');

    const users = await getUsers();

    return (
        <>
            <Flexbox spaceBetween>
                <h2>Lista de Usuários ({ users.length })</h2>

                <Link href='/getic/usuarios/adicionar'>
                    <Button>Adicionar Usuário</Button>
                </Link>
            </Flexbox>

            <ul>
                {users.map((user: User) => (
                    <li key={ user.id }>
                        <Link href={`/getic/usuarios/${user.id}`}>
                            <Box
                                gapSm 
                                hover
                            >
                                <p>{ user.name }</p>
                                <p className="sm clr-text-light"><b>{ user.cpf }</b></p>
                            </Box>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}