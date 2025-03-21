import styles from "./Sidebar.module.css";
import Image from "next/image";
import profilePic from "@/public/erick.jpg";
import Menu from "./Menu";

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
                    alt="Logotipo do SESC"
                    className={ styles.logo }
                    height={339}
                    priority
                    src="/sesc-logo.png"
                    width={630}
                />

                <div className={ styles.footer__info }>
                    <p className={ styles.footer__title }>Departamento Regional do Acre</p>
                    <p className={ styles.footer__subtitle }>Sistema Integrado v1.0</p>
                </div>
            </footer>
        </aside>
    );
}