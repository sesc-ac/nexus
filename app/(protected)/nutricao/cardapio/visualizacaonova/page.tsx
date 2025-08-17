import { getFoodMenuProducts } from "@/app/data-access/foodMenuProduct";
import { FoodMenuProduct } from "@prisma/client";
import styles from './page.module.css';
import Flexbox from "@/app/ui/Flexbox";
import { valueToCurrency } from "@/app/utils/dataFormat";
import Link from "next/link";
import Image from "next/image";
import sescLogo from "@/public/sesc-logo.svg";
import MenuTable from "./components/MenuTable";
import lanchesImage from '@/public/lanchonete-lanche.webp';
import MenuList from "./components/MenuList";

export default async function Page(){
    return (
        <>
            <div className={ styles.foodMenuOverlay }>
                <Image 
                    alt="Imagem de Lanches"
                    height={ 3940 }
                    src={ lanchesImage }
                    width={ 5928 }
                />

                {/* <MenuList category="Lanches" /> */}


                <div>
                    <MenuTable category="Lanches" />
                </div>
                {/* <div></div> */}
                {/* <div className={ styles.foodMenuCategory }>
                    <h3>Lanches</h3>

                    <MenuTable category="Lanches"/>
                </div>

                <div className={ styles.foodMenuCategory }>
                    <h3>Bebidas</h3>

                    <MenuTable category="Bebidas"/>

                    <h3>Sobremesas</h3>

                    <MenuTable category="Sobremesas"/>
                </div> */}

                <Link href="/nutricao/cardapio" className={ styles.floatingButton }>
                    <Image 
                        alt="Logotipo do Sesc" 
                        src={ sescLogo } 
                    />

                    <p>Ir para Controle</p>
                </Link>
            </div>
        </>
    );
}