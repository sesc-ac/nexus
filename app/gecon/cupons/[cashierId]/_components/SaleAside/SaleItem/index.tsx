import Badge from "@/app/_ui/Badge";
import styles from "./SaleItem.module.css";
import { valueToCurrency } from "@/app/_utils/dataFormat";

export default function SaleItem(){
    return(
        <li className={ styles.saleItem }>
            <p>Item 1</p>

            <Badge>{ valueToCurrency(2.5) }</Badge>
        </li>
    );
}