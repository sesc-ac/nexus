'use client';

import { MouseEvent, ReactNode } from "react";
import './Aside.css';
import IconButton from "../IconButton";
import { useRouter } from "next/navigation";

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

    const router = useRouter();

    const handleBackdropClose = (event: any) => {
        if(event.target.classList.contains('asideBackdrop'))
            router.back();
    }

    const handleButtonClose = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        router.back();
    }
    
    return(
        <div className="asideBackdrop" onClick={ handleBackdropClose }>
            <aside className={ className }>
                <IconButton icon="closePanel" size="lg" onClick={ handleButtonClose } />

                { children }
            </aside>
        </div>
    );
}