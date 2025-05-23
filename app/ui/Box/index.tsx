import { ReactNode } from 'react';
import styles from './Box.module.css';

type BoxProps = {
    children: ReactNode,
    fill?: true,
    fitContent?: true,
    gapSm?: true
    paddingSm?: true
}

export default function Box({ 
    children, 
    fill, 
    fitContent, 
    gapSm, 
    paddingSm, 
}: BoxProps){
    const className = `
        ${styles.box}
        ${fill ? styles.fill : ''}
        ${fitContent ? styles.fitContent : ''}
        ${gapSm ? styles.gapSm : ''}
        ${paddingSm ? styles.paddingSm : ''}
    `;

    return(
        <div className={ className }>
            { children }
        </div>
    );
}