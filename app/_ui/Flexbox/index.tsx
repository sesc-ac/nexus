import { ReactNode } from "react";
import styles from './Flexbox.module.css';

type FlexboxProps = {
    alignEnd?: true,
    alignStart?: true,
    children: ReactNode,
    column?: true,
    gapLg?: true,
    gapSm?: true,
    spaceBetween?: true
}

export default function Flexbox({ 
    alignEnd,
    alignStart,
    children, 
    column,
    gapLg,
    gapSm,
    spaceBetween 
}: FlexboxProps){
    const className = `
        ${styles.flexbox}
        ${alignEnd ? styles.alignEnd : ''}
        ${alignStart ? styles.alignStart : ''}
        ${column ? styles.column : ''}
        ${gapLg ? styles.gapLg : ''}
        ${gapSm ? styles.gapSm : ''}
        ${spaceBetween ? styles.spaceBetween : ''}
    `;

    return(
        <div className={ className }>
            { children }
        </div>
    );
}