import { getSaleItems } from "@/app/data-access/saleItem";
import { Sale, SaleItem } from "@prisma/client";
import SaleListItem from "./SaleListItem";
import Flexbox from "@/app/_ui/Flexbox";
import { valueToCurrency } from "@/app/_utils/dataFormat";
import styles from "./SaleList.module.css";
import { SaleWithRelations } from "@/app/data-access/sale";

export default async function SaleList({
    sale
}: {
    sale: SaleWithRelations
}){
    console.log("SALE LIST COMPONENT");

    return (
        <ul className={ styles.saleList }>
            {sale.items.map((item) => (
                <SaleListItem
                    key={ item.id }
                    product={ item.product.description }
                    productUnit={ item.product.unit }
                    quantity={ item.quantity } 
                    value={ item.itemValue }
                />
            ))}

            <li>
                <Flexbox spaceBetween>
                    <p className="sm"><b>TOTAL</b></p>
                    <p className="sm"><b>{ valueToCurrency(sale.value) }</b></p>
                </Flexbox>
            </li>
        </ul>
    ); 
}