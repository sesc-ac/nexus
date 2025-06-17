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
            <div className={ styles.sidebar__container }>
                <div className={ styles.user__container }>
                    <Image
                        alt="Foto de perfil"
                        className={ styles.user__photo }
                        src={ profilePic }
                    />

                    <p className={ styles.user__name }>Érick Fernandes</p>
                </div>

                <Menu />
            </div>

            <footer className={ styles.sidebar__footer }>

                <Link href='/'>
                    <Image
                        alt="Logotipo do Nexus"
                        className={ styles.logo }
                        height={280}
                        priority
                        src={ nexusLogo }
                        width={962}
                    />
                </Link>

                <Flexbox 
                    alignCenter
                    column 
                    gapSm 
                >
                    <Link target="_blank" href="https://sescacre.com.br/"><p className="sm"><b>Departamento Regional do Acre</b></p></Link>
                    <Link target="_blank" href="https://github.com/sesc-ac"><p className="sm clr-text-light"><b>Versão: ALFA</b></p></Link>
                </Flexbox>
            </footer>
        </aside>
    );
}