import styles from './Menu.module.css';
import { Fragment } from 'react';
import MenuLink from './MenuLink';
import { getModules } from '@/app/data-access/module';
import { getModuleGroups } from '@/app/data-access/moduleGroup';

export default function Menu(){
    console.log('🧩 COMPONENT - SIDEBAR MENU');

    const moduleGroups = getModuleGroups();
    const modules = getModules();

    return(
        <menu className={ styles.menu }>
            {moduleGroups.map((group) => (
                <Fragment key={ group.name }>
                    <p className="sm clr-text-light"><b>{ group.name }</b></p>

                    {modules.filter((link) => link.group === group.name).map((link) => (
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