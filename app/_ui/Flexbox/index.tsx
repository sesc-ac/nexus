import { ReactNode } from "react";
import styles from './Flexbox.module.css';

type FlexboxProps = {
    children: ReactNode,
    column?: true
}

export default function Flexbox({ children, column }: FlexboxProps){
    const className = `
        ${styles.flexbox}
        ${column ? styles.column : ''}
    `;

    return(
        <div className={ className }>
            { children }
        </div>
    );
}