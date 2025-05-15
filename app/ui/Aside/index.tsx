import { ReactNode } from "react";
import './Aside.css';

export default function Aside({
    children,
}: {
    children: ReactNode;
}){
    const open = true;
    const className = `
        aside
        ${ open ? 'open' : '' }
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