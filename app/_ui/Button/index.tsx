import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
    return(
        <button 
            className={styles.button}
            {...rest}
        >
            { children }
        </button>
    );
}