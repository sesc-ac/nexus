'use server';

import { createFoodMenuProduct, deleteFoodMenuProduct, getFoodMenuProduct, updateFoodMenuProduct } from "@/app/data-access/foodMenuProduct";
import { parseLocaleNumber } from "@/app/utils/dataFormat";
import { revalidatePath } from "next/cache";

export async function deleteFoodMenuProductAction(formData: FormData){
    console.log('🔁 ACTION - DELETE FOOD MENU PRODUCT'); 

    const productId = formData.get('productId') as string

    await deleteFoodMenuProduct(productId);
    
    revalidatePath('/nutricao/cardapio');
}

export async function switchFoodMenuProductVisibleAction(productId: string, visible: boolean){
    console.log('🔁 ACTION - SWITCH FOOD MENU PRODUCT VISIBLE');
   
    await updateFoodMenuProduct(productId, {visible: visible });

    revalidatePath('/nutricao/cardapio');
}

export async function updateOrCreateFoodMenuProductAction(formData: FormData){
    console.log('🔁 ACTION - UPDATE OR CREATE FOOD MENU PRODUCT');

    const name = formData.get('name') as string;
    const category = formData.get('category') as string
    const description = formData.get('description') as string

    const comerciarioPrice = formData.get('comerciarioPrice') as string
    const conveniadoPrice = formData.get('conveniadoPrice') as string
    const empresarioPrice = formData.get('empresarioPrice') as string
    const publicoPrice = formData.get('publicoPrice') as string

    const productId = formData.get('productId') as string;

    if(productId)
        await updateFoodMenuProduct(productId, {
            name: name,
            category: category,
            description: description,
            comerciarioPrice: parseLocaleNumber(comerciarioPrice),
            conveniadoPrice: parseLocaleNumber(conveniadoPrice),
            empresarioPrice: parseLocaleNumber(empresarioPrice),
            publicoPrice: parseLocaleNumber(publicoPrice)
        });
    else
        await createFoodMenuProduct({
            name: name,
            category: category,
            description: description,
            comerciarioPrice: parseLocaleNumber(comerciarioPrice),
            conveniadoPrice: parseLocaleNumber(conveniadoPrice),
            empresarioPrice: parseLocaleNumber(empresarioPrice),
            publicoPrice: parseLocaleNumber(publicoPrice)
        });

    revalidatePath('/nutricao/cardapio');
}