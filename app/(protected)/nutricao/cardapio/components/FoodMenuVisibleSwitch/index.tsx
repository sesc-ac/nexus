'use client'

import Flexbox from "@/app/ui/Flexbox";
import RadioInput from "@/app/ui/RadioInput";
import Form from "next/form";
import { useRef } from "react";
import { switchFoodMenuProductVisibleAction } from "../../actions";

export default function FoodMenuVisibleSwitch({
    productId,
    productVisible
}: {
    productId: string,
    productVisible: boolean
}){
    const formRef = useRef<HTMLFormElement>(null);

    function handleClick(){
        console.log('HANDLE');
        formRef.current?.requestSubmit();
    }

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