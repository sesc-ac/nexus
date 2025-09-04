'use client'

import Link from 'next/link';
import styles from './MenuLink.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type MenuLinkProps = {
    href: string,
    icon?: string,
    name: string,
}

export default function MenuLink({
    href,
    icon,
    name
}: MenuLinkProps){
    const pathname = usePathname();

    const className = `
        ${styles.menuLink}
        ${pathname.includes(href) ? styles.active : ''}
    `;

    return(
        <Link
            className={ className }
            href={ href }
        >
            {icon ?
                <Image
                    alt={ name }
                    src={ icon }
                />
            : null}
            
            <p className={ styles.link__name }>{ name }</p>
        </Link>
    );
}