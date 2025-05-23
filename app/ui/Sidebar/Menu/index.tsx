import styles from './Menu.module.css';
import reciptIcon from '@/public/icons/receipt.svg';
import productIcon from '@/public/icons/box_edit.svg';
import syncIcon from '@/public/icons/sync.svg';
import { Fragment } from 'react';
import MenuLink from './MenuLink';

export default function Menu(){
    const linkGroups = [
        {name: 'GECON'},
        {name: 'GETIC'},
    ];

    const links = [
        {name: 'Cupons Fiscais', href: '/gecon/cupons', icon: reciptIcon, group: 'GECON'},
        {name: 'Produtos', href: '/gecon/produtos', icon: productIcon, group: 'GECON'},
        {name: 'Sincronização', href: '/getic/sincronizacao', icon: syncIcon, group: 'GETIC'},
    ];

    return(
        <menu className={ styles.menu }>
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