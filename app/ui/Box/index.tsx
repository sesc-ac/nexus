import { ReactNode } from 'react';
import styles from './Box.module.css';

type BoxProps = {
    children: ReactNode,
    fill?: boolean,
    fitContent?: true,
    gapSm?: true
    hover?: true
    paddingSm?: true
}

export default function Box({ 
    children, 
    fill, 
    fitContent, 
    gapSm, 
    hover, 
    paddingSm, 
}: BoxProps){
    const className = `
        ${styles.box}
        ${fill ? styles.fill : ''}
        ${fitContent ? styles.fitContent : ''}
        ${gapSm ? styles.gapSm : ''}
        ${hover ? styles.hover : ''}
        ${paddingSm ? styles.paddingSm : ''}
    `;

    return(
        <div className={ className }>
            { children }
        </div>
    );
}