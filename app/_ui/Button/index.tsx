import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    fill?: true;
};

export function Button({ children, fill, ...rest }: ButtonProps) {
    const className = `
        ${styles.button}
        ${fill ? styles.fill : ''}
    `;

    return(
        <button 
            className={ className }
            {...rest}
        >
            { children }
        </button>
    );
}