import { valueToCurrency } from "@/app/utils/dataFormat";
import { FoodMenuProduct } from "@prisma/client";
import styles from './FoodMenuTable.module.css';
import Flexbox from "@/app/ui/Flexbox";
import Badge from "@/app/ui/Badge";
import IconButton from "@/app/ui/IconButton";
import RadioInput from "@/app/ui/RadioInput";
import Link from "next/link";
import FoodMenuVisibleSwitch from "../FoodMenuVisibleSwitch";
import Form from "next/form";
import { deleteFoodMenuProductAction } from "../../actions";

export default function FoodMenuTable({ foodMenuProducts }: { foodMenuProducts: FoodMenuProduct[] }){
    return (
        <table className={ styles.table }>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Categoria</th>
                    <th colSpan={ 2 }>Preços</th>
                    <th>Exibição</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {foodMenuProducts.map((product) => (
                    <tr key={ product.id }>
                        <td>
                            <Flexbox column>
                                <p className="md">{ product.name }</p>
                                
                                {product.description ? <p className="sm clr-text-light"><b>{ product.description }</b></p> : null}
                            </Flexbox>
                        </td>
                        
                        <td>
                            <Badge><p>{ product.category }</p></Badge></td>
                        <td>

                            <Flexbox column>
                                <Flexbox fillWidth gapLg spaceBetween>
                                    <p className="clr-text-light">Comerciário</p>
                                    <p>{ valueToCurrency(product.comerciarioPrice) }</p>
                                </Flexbox>

                                <Flexbox fillWidth gapLg spaceBetween>
                                    <p className="clr-text-light">Conveniado</p>
                                    <p>{ valueToCurrency(product.conveniadoPrice) }</p>
                                </Flexbox>
                            </Flexbox>
                        </td>

                        <td>
                            <Flexbox column>
                                <Flexbox fillWidth gapLg spaceBetween>
                                    <p className="clr-text-light">Empresário</p>
                                    <p>{ valueToCurrency(product.empresarioPrice) }</p>
                                </Flexbox>

                                <Flexbox fillWidth gapLg spaceBetween>
                                    <p className="clr-text-light">Público Geral</p>
                                    <p>{ valueToCurrency(product.publicoPrice) }</p>
                                </Flexbox>
                            </Flexbox>
                        </td>

                        <td>
                            {/* <Flexbox gapSm>
                                <RadioInput
                                    defaultChecked={ product.visible } 
                                    id={ `product-${ product.id }-visibility-visible` } 
                                    labelText="Visível"
                                    name={ `product-${ product.id }-visibility` } 
                                />

                                <RadioInput
                                    defaultChecked={ !product.visible } 
                                    id={ `product-${ product.id }-visibility-hidden` } 
                                    labelText="Oculto"
                                    name={ `product-${ product.id }-visibility` } 
                                />
                            </Flexbox> */}

                            <FoodMenuVisibleSwitch 
                                productId={ product.id }
                                productVisible={ product.visible }
                            />
                        </td>

                        <td>
                            <Flexbox>
                                <Link href={ `/nutricao/cardapio?productId=${ product.id }` }>
                                    <IconButton 
                                        icon="edit" 
                                        title="Editar item" 
                                    />
                                </Link>
                                
                                <Form action={ deleteFoodMenuProductAction }>
                                    <IconButton 
                                        icon="delete"
                                        name="productId" 
                                        title="Apagar item"
                                        type="submit"
                                        value={ product.id }
                                    />
                                </Form>
                            </Flexbox>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}