'use client'

import { Button } from "@/app/ui/Button";
import { useState } from "react";
import styles from './FoodMenuDialog.module.css';
import menuBookIcon from "@/public/icons/menu_book.svg"
import Image from "next/image";
import Flexbox from "@/app/ui/Flexbox";
import { FoodMenuProduct } from "@prisma/client";
import Box from "@/app/ui/Box";
import { valueToCurrency } from "@/app/utils/dataFormat";
import FoodMenuItem from "./FoodMenuItem";

export default function FoodMenuDialog({
    foodMenuProductsJSON
}: {
    foodMenuProductsJSON: string
}){
    const [isOpen, setIsOpen] = useState(false);

    const foodMenuProducts = JSON.parse(foodMenuProductsJSON);

    const lanchesCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Lanches');
    const bebidasCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Bebidas');
    const sobremesasCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Sobremesas');

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Button onClick={ handleClick }>Visualização</Button>

            <dialog
                className={ styles.dialog } 
                open={ isOpen }
            >
                <header className={ styles.header }>
                    <Flexbox>
                        <Image 
                            alt="Cardápio Digital"
                            src={ menuBookIcon }
                        />

                        <h2>Cardápio Digital</h2>
                    </Flexbox>

                    <Button onClick={() => setIsOpen(!isOpen)}>Controle</Button>
                </header>

                <Flexbox alignStart gapLg>
                    <div className={ styles.foodMenuCategory }>
                        <h3 className="lg">Lanches</h3>
                        <Flexbox column>                    
                            {lanchesCategoryProducts.map((product: FoodMenuProduct) => (
                                <FoodMenuItem
                                    key={ product.id } 
                                    product={ product }                            
                                />
                                // <Box key={ product.id }>
                                //     <p>{ product.name }</p>
                                //     <p>{ product.description }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ valueToCurrency(product.comerciarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.conveniadoPrice) }</p>
                                //     <p>{ valueToCurrency(product.empresarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.publicoPrice) }</p>
                                    
                                // </Box>
                            ))}
                        </Flexbox>
                    </div>

                    <div className={ styles.foodMenuCategory }>
                        <h3 className="lg">Bebidas</h3>
                        <Flexbox column>
                            {bebidasCategoryProducts.map((product: FoodMenuProduct) => (
                                <FoodMenuItem
                                    key={ product.id } 
                                    product={ product }                            
                                />
                                // <Box key={ product.id }>
                                //     <p>{ product.name }</p>
                                //     <p>{ product.description }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ valueToCurrency(product.comerciarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.conveniadoPrice) }</p>
                                //     <p>{ valueToCurrency(product.empresarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.publicoPrice) }</p>
                                    
                                // </Box>
                            ))}
                        </Flexbox>
                    </div>

                    <div className={ styles.foodMenuCategory }>
                        <h3 className="lg">Sobremesas</h3>
                        <Flexbox column>
                            {sobremesasCategoryProducts.map((product: FoodMenuProduct) => (
                                <FoodMenuItem
                                    key={ product.id } 
                                    product={ product }                            
                                />
                                // <Box key={ product.id }>
                                //     <p>{ product.name }</p>
                                //     <p>{ product.description }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ product.category }</p>
                                //     <p>{ valueToCurrency(product.comerciarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.conveniadoPrice) }</p>
                                //     <p>{ valueToCurrency(product.empresarioPrice) }</p>
                                //     <p>{ valueToCurrency(product.publicoPrice) }</p>
                                    
                                // </Box>
                            ))}
                        </Flexbox>
                    </div>
                </Flexbox>
            </dialog>
        </>
    );
}