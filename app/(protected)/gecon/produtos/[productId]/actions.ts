'use server';

import { updateProduct } from "@/app/data-access/product";
import { revalidatePath } from "next/cache";

export async function updateProductAction(formData: FormData){
    console.log('🔁 ACTION - UPDATE PRODUCT');

    const productId = formData.get('productId') as string;

    const ncm = formData.get('ncm') as string;

    const productData = { ncm: ncm };

    await updateProduct(productId, productData);

    revalidatePath(`/gecon/produtos/${productId}`);
}