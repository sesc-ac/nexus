import { ReactNode } from "react";
import styles from './Flexbox.module.css';

type FlexboxProps = {
    alignCenter?: true,
    alignEnd?: true,
    alignStart?: true,
    children: ReactNode,
    column?: true,
    gapLg?: true,
    gapSm?: true,
    spaceBetween?: true
}

export default function Flexbox({ 
    alignCenter,
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
        ${alignCenter ? styles.alignCenter : ''}
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