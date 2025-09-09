'use server'

import { emitSale } from "@/app/lib/NFE-IO/saleEmission";

export async function emitSaleAction(formData: FormData) {
    console.log('🔁 ACTION - EMIT SALE');

    const saleId = formData.get('saleId') as string;

    const result = await emitSale(saleId);

    console.log('RESULT', result);
}