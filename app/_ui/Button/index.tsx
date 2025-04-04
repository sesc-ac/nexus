import React from 'react';
import styles from './Button.module.css';
import Image from 'next/image';
import downloadIcon from '@/public/icons/file_save.svg';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    fill?: true,
    variant?: 'download',
};

export function Button({ children, fill, variant, ...rest  }: ButtonProps) {
    const className = `
        ${styles.button}
        ${fill ? styles.fill : ''}
    `;

    return(
        <button 
            className={ className }
            { ...rest }
        >   
            {variant === 'download' && <Image
                src={ downloadIcon }
                alt="Download"
            />}

            { children }
        </button>
    );
}