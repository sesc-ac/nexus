import Badge from "@/app/_ui/Badge";
import { valueToCurrency } from "@/app/_utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";
import Flexbox from "@/app/_ui/Flexbox";

export default function SaleItem({
    product,
    productUnit,
    quantity,
    value
}: {
    product: string,
    productUnit: string,
    quantity: number,
    value: Decimal
}){
    return(
        <li>
            <Flexbox gapSm column>
                <p className="sm">{ product }</p>
                <p className="xsm clr-text-light"><b>{quantity} { productUnit }{ quantity > 1 ? 's' : '' }</b></p>
            </Flexbox>

            <Badge>{ valueToCurrency(value) }</Badge>
        </li>
    );
}