import Link from 'next/link';
import Image from "next/image";
import styles from './Menu.module.css';
import reciptIcon from '@/public/receipt.svg';
import homeIcon from '@/public/home.svg';

export default function Menu(){
    return(
        <menu className={ styles.menu }>
            <Link
                className={  styles.menu__link }
                href="/"
            >
                <Image 
                    alt='Página Inicial'
                    className={ styles.link__icon }
                    src={ homeIcon }
                />
                
                <p className={ styles.link__name }>Página Inicial</p>
            </Link>

            <p className={ styles.menu__group }>GECON</p>

            <Link
                className={  styles.menu__link }
                href="/gecon/cupons"
            >
                <Image
                    alt="Cupons Fiscais"
                    className={ styles.link__icon }
                    src={ reciptIcon }
                />

                <p className={ styles.link__name }>Cupons Fiscais</p>
            </Link>
        </menu>
    );
    // const linkGroups = [
    //     {name: 'GECON'}
    // ];

    // const links = [
    //     {name: 'Página Inicial', href: '/', icon: null, group: ''},
    //     {name: 'Cupons Fiscais', href: '/gecon/cupons', icon: reciptIcon, group: 'GECON'},
    // ];

    // return(
    //     <menu className={ styles.menu }>
    //         {links.filter((link) => link.group === '').map((link) => {
    //             return(
    //                 <Link
    //                     className={ styles.menu__link }
    //                     href={ link.href }
    //                     key={ link.name }
    //                 >
    //                     {
    //                         link.icon &&

    //                         <Image
    //                         alt={ link.name }
    //                         className={ styles.link__icon }
    //                         src={ link.icon }
    //                         />
    //                     }

    //                     <p>{ link.name }</p>
    //                 </Link>
    //             );
    //         })}

    //        {linkGroups.map((group) => {
    //             return(
    //                 <p>{ group.name }</p>

    //                 {linkGroups.map((group) => {
    //                     return(
    //                         <p>{ group.name }</p>
        
    //                     );
    //                })}
    //             );
    //        })}
    //     </menu>
    // );
}