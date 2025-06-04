import Image from "next/image";
import sescLogo from "@/public/header-sesc-logo.png"
import  "./Header.css";

export default function Header(){
    return(
        <header className="header">
            <Image
                alt="Logotipo SESC"
                className="headerLogo"
                src={ sescLogo }
            />
        </header>
    );
}