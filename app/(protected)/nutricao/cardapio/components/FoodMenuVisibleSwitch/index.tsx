'use client'

import Flexbox from "@/app/ui/Flexbox";
import RadioInput from "@/app/ui/RadioInput";
import { switchFoodMenuProductVisibleAction } from "../../actions";

export default function FoodMenuVisibleSwitch({
    productId,
    productVisible
}: {
    productId: string,
    productVisible: boolean
}){

    return (
        <>
            <Flexbox gapSm>
                <RadioInput
                    defaultChecked={ productVisible } 
                    id={ `product-${ productId }-visible-true` } 
                    labelText="Visível"
                    name={ `product-${ productId }-visible` } 
                    onClick={() => switchFoodMenuProductVisibleAction(productId, true)}
                />

                <RadioInput
                    defaultChecked={ !productVisible } 
                    id={ `product-${ productId }-visible-false` } 
                    labelText="Oculto"
                    name={ `product-${ productId }-visible` }
                    onClick={() => switchFoodMenuProductVisibleAction(productId, false)}
                />
            </Flexbox>
        </>
    );
}