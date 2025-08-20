import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    fillWidth?: true,
    secondary?: true
};

export function Button({ 
    children, 
    fillWidth,
    secondary, 
    ...rest  
}: ButtonProps) {
    const className = `
        ${styles.button}
        ${fillWidth ? styles.fillWidth : ''}
        ${secondary ? styles.secondary : ''}
    `;

    return(
        <button className={ className } { ...rest }>   
            { children }
        </button>
    );
}