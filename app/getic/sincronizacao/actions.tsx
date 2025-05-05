'use server'

import { createSynchronization } from "@/app/_data-access/synchronization";
import { syncSalesData } from "@/app/_lib/dataSynchronization"
import { revalidatePath } from "next/cache";

export async function initSynchronization(previousState: any, formData: FormData){
    console.log('ACTION CREATE SYNCHRONIZATION');

    const initialDate = formData.get('initialDate') as string;
    const finalDate = formData.get('finalDate') as string;

    const [totalCreatedData, totalUpdatedData] = await syncSalesData(initialDate, finalDate);

    await createSynchronization({
        createdData: totalCreatedData,
        updatedData: totalUpdatedData,
    });

    revalidatePath('/getic/sincronizacao/');
}