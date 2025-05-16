import styles from "./Sidebar.module.css";
import Image from "next/image";
import profilePic from "@/public/erick.jpg";
import Menu from "./Menu";
import nexusLogo from "@/public/nexus.svg";
import Flexbox from "../Flexbox";

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
                <Image
                    alt="Logotipo do Nexus"
                    className={ styles.logo }
                    height={280}
                    priority
                    src={ nexusLogo }
                    width={962}
                />

                <Flexbox 
                    alignCenter
                    column 
                    gapSm 
                >
                    <a target="_blank" href="https://sescacre.com.br/"><p className="sm "><b>Departamento Regional do Acre</b></p></a>
                   <a target="_blank" href="https://github.com/sesc-ac"><p className="sm "><b>v1.0</b></p></a>
                </Flexbox>
            </footer>
        </aside>
    );
}