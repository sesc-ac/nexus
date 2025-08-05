import { ReactNode } from "react";
import styles from './Aside.module.css';

export default function Aside({
    children,
}: {
    children: ReactNode;
}){
    const open = true;
    const className = `
        ${ styles.aside }
        ${ open ? styles.open : '' }
    `;

    // const router = useRouter();

    // const handleBackdropClose = (event: any) => {
    //     if(event.target.classList.contains('asideBackdrop'))
    //         router.back();
    // }

    // const handleButtonClose = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    //     router.back();
    // }
    
    return(
            <aside className={ className }>
                {/* <IconButton icon="closePanel" size="lg" onClick={ handleButtonClose } /> */}

                { children }
            </aside>
    );
}