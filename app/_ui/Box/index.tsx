import { ReactNode } from 'react';
import styles from './Box.module.css';

type BoxProps = {
    children: ReactNode,
    fill?: true,
    radius?: true,
    smallGap?: true
}

export default function Box({ children, fill, radius, smallGap }: BoxProps){
    const className = `
        ${styles.box}
        ${fill ? styles.fill : ''}
        ${smallGap ? styles.smallGap : ''}
        ${radius ? styles.radius : ''}
    `;

    return(
        <div className={ className }>
            { children }
        </div>
    );
}