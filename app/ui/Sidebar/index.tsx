import styles from "./Sidebar.module.css";
import Image from "next/image";
import Menu from "./Menu";
import nexusLogo from "@/public/nexus.svg";
import Flexbox from "../Flexbox";
import Link from "next/link";
import { verifySession } from "@/app/lib/auth";
import LogoutWrapper from "../LogoutWrapper";
import personIcon from "@/public/icons/person.svg";

export default async function Sidebar(){
    const session = await verifySession();

    return (
        <aside className={ styles.sidebar }>
            <main className={ styles.content }>
                <LogoutWrapper>
                    <div className={ styles.user }>
                        <div className={ styles.userAvatar }>
                            <Image 
                                alt="Usuário"
                                src={ personIcon } 
                            />
                        </div>

                        <p>{ session?.user.name }</p>
                    </div>
                </LogoutWrapper>

                <Menu />
            </main>

            <footer className={ styles.footer }>
                <Link href='/'>
                    <Image
                        alt="Logotipo do Nexus"
                        className={ styles.logo }
                        src={ nexusLogo }
                    />
                </Link>

                <Flexbox 
                    alignCenter
                    column 
                    gapSm 
                >
                    <Link target="_blank" href="https://sescacre.com.br/"><p className="sm"><b>Departamento Regional do Acre</b></p></Link>
                    <Link target="_blank" href="https://github.com/sesc-ac"><p className="sm clr-text-light"><b>Versão: BETA</b></p></Link>
                </Flexbox>
            </footer>
        </aside>
    );
}