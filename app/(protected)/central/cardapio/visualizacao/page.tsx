import Image from 'next/image';
import styles from './page.module.css';
import lanchesImage from '@/public/images/lanchonete-lanches.webp';
import bebidasImage from '@/public/images/lanchonete-bebidas.webp';
import MenuList from './components/MenuList';
import Link from 'next/link';
import sescLogo from "@/public/sesc-logo.svg";

export default async function Page(){
    return (
        <div className={ styles.foodMenuOverlay }>
            <Image 
                alt="Bebidas da Lanchonete"
                className={`${styles.overlayImage} ${styles.bebidasImage}`}
                height={ 3264 }
                src={ bebidasImage }
                width={ 4912 }
            />

            <Image 
                alt="Lanches da Lanchonete"
                className={`${styles.overlayImage} ${styles.lanchesImage}`}
                height={ 3940 }
                src={ lanchesImage }
                width={ 5928 }
            />

            <div className={ styles.lanchesCategory }>
                <h2>Lanches</h2>

                <MenuList category='Lanches' />
            </div>

            <div className={ styles.bebidasCategory }>
                <h2>Bebidas</h2>
                <MenuList category='Bebidas' />

                <h2>Sobremesas</h2>
                <MenuList category='Sobremesas' />
            </div>

            <Link href="/central/cardapio" className={ styles.floatingButton }>
                <Image 
                    alt="Logotipo do Sesc" 
                    src={ sescLogo } 
                />

                <p>Ir para Controle</p>
            </Link>
        </div>
    );
}