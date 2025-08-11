import styles from "./Sidebar.module.css";
import Image from "next/image";
import profilePic from "@/public/erick.jpg";
import Menu from "./Menu";
import nexusLogo from "@/public/nexus.svg";
import Flexbox from "../Flexbox";
import Link from "next/link";

export default function Sidebar(){
    return (
        <aside className={ styles.sidebar }>
            <main className={ styles.content }>
                <div className={ styles.user }>
                    {/* <Image
                        alt="Foto de perfil"
                        className={ styles.userAvatar }
                        src={ profilePic }
                    /> */}
                    <div className={ styles.userAvatar }></div>

                    <p>Usuário</p>
                </div>

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