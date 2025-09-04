import Flexbox from "@/app/ui/Flexbox";
import { valueToCurrency } from "@/app/utils/dataFormat";
import { FoodMenuProduct } from "@prisma/client";
import styles from './FoodMenuItem.module.css'

export default function FoodMenuItem({ 
    product
}: { 
    product: FoodMenuProduct
}){
    return (
        <div className={ styles.foodMenuItem }>
            <p className="md"><b>{ product.name }</b></p>
            { product.description ? <p className="clr-text-light">{ product.description }</p> : null }

            <Flexbox 
                fillWidth
                spaceBetween
            >
                <p className="clr-text-light">Comerciário</p>
                <p><b>{ valueToCurrency(product.comerciarioPrice) }</b></p>
            </Flexbox>

            <Flexbox 
                fillWidth
                spaceBetween
            >
                <p className="clr-text-light">Conveniado</p>
                <p><b>{ valueToCurrency(product.conveniadoPrice) }</b></p>
            </Flexbox>

            <Flexbox 
                fillWidth
                spaceBetween
            >
                <p className="clr-text-light">Empresário</p>
                <p><b>{ valueToCurrency(product.empresarioPrice) }</b></p>
            </Flexbox>

            <Flexbox 
                fillWidth
                spaceBetween
            >
                <p className="clr-text-light">Geral</p>
                <p><b>{ valueToCurrency(product.publicoPrice) }</b></p>
            </Flexbox>
        </div>
    );    
}