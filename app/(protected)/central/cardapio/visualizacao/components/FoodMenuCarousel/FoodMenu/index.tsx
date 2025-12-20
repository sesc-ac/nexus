import { FoodMenuProduct } from "@prisma/client";
import styles from './FoodMenu.module.css';
import { valueToCurrency } from "@/app/utils/dataFormat";
import Image from 'next/image';
import Link from 'next/link';
import sescLogo from "@/public/sesc-logo-branco.svg";

export function FoodMenu({ 
    category,
    interval,
    products 
}: {
    category: string, 
    interval: number,
    products: FoodMenuProduct[]
}) {
    console.log('🧩 COMPONENT - FOOD MENU');

    return (
        <div 
            className={ styles.foodMenu }
            style={{ ['--animation-duration' as string]: `${interval}ms` }}
        >
            <div className={ styles.foodMenuTop }>
                <Link href="/central/cardapio">
                    <Image 
                        alt="Logotipo do Sesc" 
                        className={ styles.sescLogo }
                        src={ sescLogo } 
                    />

                </Link>

                <h1 className={ styles.foodMenuTitle }>{ category }</h1>

                <p className={`${ styles.foodMenuCategory } ${ styles.comerciario }`}>Comerciário</p>
                <p className={ styles.foodMenuCategory }>Demais Categorias</p>
            </div>

            <ul className={ styles.foodMenuList }>
                {products.map((product: FoodMenuProduct) => (
                    <li className={ styles.foodMenuItem } key={ product.id }>
                        <div className={ styles.itemName }>
                            <p>{ product.name }</p>
                            <p>{ product.description }</p>
                        </div>

                        <p className={`${ styles.itemPrice } ${ styles.comerciario }`}><b>{ valueToCurrency( product.comerciarioPrice ) }</b></p>
                        <p className={ styles.itemPrice }><b>{ valueToCurrency( product.publicoPrice ) }</b></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
  