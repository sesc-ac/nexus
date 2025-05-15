import { ReactNode } from 'react';
import styles from './Badge.module.css';

type BadgeProps = {
    children: ReactNode,
    sm?: true;
}

export default function Badge({
    children,
    sm
}: BadgeProps){
    const className = `
        ${styles.badge}
        ${sm ? styles.sm : ''}
    `;
    return(
        <span className={ className }>
            { children }
        </span>
    );
}