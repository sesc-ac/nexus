import Image from "next/image";
import sescLogo from "@/public/header-logo.svg"
import styles from "./ProtectedHeader.module.css";
import Link from "next/link";
import Flexbox from "../Flexbox";

export default function ProtectedHeader(){
    return(
        <header className={ styles.header }>
            <Image
                alt="Logotipo SESC"
                className={ styles.logo }
                src={ sescLogo }
            />

            <Flexbox gapLg>
                <Link href="http://intranet.sescacre.com.br/" target="_blank">Intranet</Link>
                <Link href="https://sescac.mxmwebmanager.com.br/prd" target="_blank">MXM</Link>
                <Link href="http://rmportal.sescacre.com.br/Corpore.net/Login.aspx" target="_blank">RM Portal</Link>
                <Link href="http://send3.sescacre.com.br/painel/main/login" target="_blank">Send</Link>
            </Flexbox>
        </header>
    );
}