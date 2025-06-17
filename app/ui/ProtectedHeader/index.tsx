import Image from "next/image";
import sescLogo from "@/public/header-sesc-logo.png"
import styles from "./ProtectedHeader.module.css";

export default function ProtectedHeader(){
    return(
        <header className={ styles.header }>
            <Image
                alt="Logotipo SESC"
                className={ styles.logo }
                src={ sescLogo }
            />
        </header>
    );
}