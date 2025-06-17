'use server';

import { updateProduct } from "@/app/data-access/product";
import { revalidatePath } from "next/cache";

export async function updateProductAction(formData: FormData){
    console.log('ACTION UPDATE PRODUCT');

    const productId = formData.get('productId') as string;

    const cfop = formData.get('cfop') as string;
    const cofinsCST = formData.get('cofinsCST') as string;
    const icmsCSOSN = formData.get('icmsCSOSN') as string;
    const icmsCST = formData.get('icmsCST') as string;
    const ncm = formData.get('ncm') as string;
    const pisCST = formData.get('pisCST') as string;

    const productData = {
        cfop: cfop,
        cofinsCST: cofinsCST,
        icmsCSOSN: icmsCSOSN,
        icmsCST: icmsCST,
        ncm: ncm,
        pisCST: pisCST,
    }

    await updateProduct(productId, productData);

    revalidatePath(`/gecon/produtos/${productId}`);
}