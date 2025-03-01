import styles from "./Navbar.module.css";
import Image from "next/image";
import profilePic from "../../../public/erick.jpg";

export default function Navbar(){
    return (
        <nav className={ styles.navbar }>
            <div className={ styles.navbar__container }>
                <Image
                    alt="Logotipo do SESC"
                    className={ styles.logo }
                    height={339}
                    priority
                    src="/sesc-logo.png"
                    width={630}
                />

                <menu className={ styles.menu }>
                    <li>
                        <a className={ styles.menu__link } href="#">Cupons Fiscais</a>
                    </li>

                    <li>
                        <a className={ styles.menu__link } href="#">Link 1</a>
                    </li>

                    <li>
                        <a className={ styles.menu__link } href="#">Link 2</a>
                    </li>

                    <li>
                        <a className={ styles.menu__link } href="https://nextjs.org/docs">Docs</a>
                    </li>
                </menu>
            </div>

            <div className={ styles.user__container }>
                <Image
                    alt="Foto de perfil"
                    className={ styles.user__photo }
                    // height={248}
                    // priority
                    src={ profilePic }
                    // width={186}
                />

                <div className={ styles.user__data }>
                    <p className={ styles.user__name }>Érick Fernandes do Nascimento</p>
                    <p className={ styles.user__email }>efnascimento@ac.sesc.com.br</p>
                </div>
            </div>
        </nav>

    );
}