'use client'

import { Button } from "@/app/ui/Button";
import { use, useRef, useState } from "react";
import styles from './FoodMenuDialog.module.css';
import Image from "next/image";
import { FoodMenuProduct } from "@prisma/client";
import { valueToCurrency } from "@/app/utils/dataFormat";
import sescLogo from "@/public/sesc-logo.svg";
import Flexbox from "@/app/ui/Flexbox";
import { getFoodMenuProducts } from "@/app/data-access/foodMenuProduct";

export default function FoodMenuDialog({
    foodMenuProductsJSON,
}: {
    foodMenuProductsJSON: string,
}){
    const dialogRef = useRef<HTMLDialogElement>(null);

    const foodMenuProducts = JSON.parse(foodMenuProductsJSON).filter((product: FoodMenuProduct) => product.visible);

    const lanchesCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Lanches');
    const bebidasCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Bebidas');
    const sobremesasCategoryProducts = foodMenuProducts.filter((product: FoodMenuProduct) => product.category == 'Sobremesas');

    return (
        <>
            <Button onClick={() => dialogRef.current?.showModal()}>Visualização</Button>

            <dialog
                className={ styles.dialog }
                ref={ dialogRef }
            >
                <div className={ styles.foodMenuCategory }>
                    <h3>Lanches</h3>

                    <table className={ styles.foodTable }>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Comericário</th>
                                <th>Conveniado</th>
                                <th>Empresário</th>
                                <th>Público Geral</th>
                            </tr>
                        </thead>

                        <tbody>
                            {lanchesCategoryProducts.map((product: FoodMenuProduct) => (
                                <tr key={ product.id }>
                                    <td>
                                        <Flexbox column gapSm>
                                            <p>{ product.name }</p>
                                            {product ? <p className="sm">{ product.description }</p> : null}
                                        </Flexbox>
                                    </td>

                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.comerciarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.conveniadoPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.empresarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.publicoPrice) }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={ styles.foodMenuCategory }>
                    <h3>Bebidas</h3>

                    <table className={ styles.foodTable }>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Comericário</th>
                                <th>Conveniado</th>
                                <th>Empresário</th>
                                <th>Público Geral</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bebidasCategoryProducts.map((product: FoodMenuProduct) => (
                                <tr key={ product.id }>
                                    <td>
                                        <Flexbox column gapSm>
                                            <p>{ product.name }</p>
                                            {product ? <p className="sm">{ product.description }</p> : null}
                                        </Flexbox>
                                    </td>

                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.comerciarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.conveniadoPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.empresarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.publicoPrice) }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Sobremesas</h3>

                    <table className={ styles.foodTable }>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Comericário</th>
                                <th>Conveniado</th>
                                <th>Empresário</th>
                                <th>Público Geral</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sobremesasCategoryProducts.map((product: FoodMenuProduct) => (
                                <tr key={ product.id }>
                                    <td>
                                        <Flexbox column gapSm>
                                            <p>{ product.name }</p>
                                            {product ? <p className="sm">{ product.description }</p> : null}
                                        </Flexbox>
                                    </td>

                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.comerciarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.conveniadoPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.empresarioPrice) }</td>
                                    <td className={ styles.priceColumn }>{ valueToCurrency(product.publicoPrice) }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={ styles.floatingButton } onClick={() => dialogRef.current?.close()}>
                    <Image alt="Logotipo do Sesc" src={ sescLogo } />
                    <h2>Cardápio Digital</h2>
                </div>
            </dialog>
        </>
    );
}