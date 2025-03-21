import styles from './Menu.module.css';
import reciptIcon from '@/public/receipt.svg';
import homeIcon from '@/public/home.svg';
import { Fragment } from 'react';
import MenuLink from './MenuLink';

export default function Menu(){
    const linkGroups = [
        {name: 'GECON'},
        {name: 'GETIC'},
    ];

    const links = [
        {name: 'Cupons Fiscais', href: '/gecon/cupons', icon: reciptIcon, group: 'GECON'},
        {name: 'Chamados', href: '/getic/chamados', group: 'GETIC'},
        {name: 'Inventário', href: 'getic/inventario', group: 'GETIC'},
    ];

    return(
        <menu className={ styles.menu }>
            {/* <MenuLink 
                href='/'
                icon={ homeIcon }
                name='Página Inicial'
            /> */}

            {linkGroups.map((group) => (
                <Fragment key={ group.name }>
                    <p className={ styles.menu__group }>{ group.name }</p>

                    {links.filter((link) => link.group === group.name).map((link) => (
                        <MenuLink
                            href={ link.href }
                            icon={ link.icon }
                            key={ link.href }
                            name={ link.name }
                        />
                    ))}
                </Fragment>
            ))}
        </menu>
    );
}