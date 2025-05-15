
import { valueToCurrency } from "@/app/_utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";
import Flexbox from "@/app/ui/Flexbox";

export default function SaleListItem({
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
    console.log("SALE LIST ITEM COMPONENT");
    
    return(
        <li>
            {/* <Flexbox gapSm column>
                <p className="sm">{ product }</p>
                <p className="xsm clr-text-light"><b>{quantity} { productUnit }{ quantity > 1 ? 's' : '' }</b></p>
            </Flexbox>

            <Badge>{ valueToCurrency(value) }</Badge> */}

            <Flexbox 
                alignStart
                spaceBetween 
            >
                <Flexbox column gapSm>
                    <p className="sm"><b>{ product }</b></p>
                    <p className="xsm clr-text-light"><b>{ quantity } { productUnit }</b></p>
                </Flexbox>

                <p className="sm"><b>{ valueToCurrency(value) }</b></p>
            </Flexbox>
        </li>
    );
}