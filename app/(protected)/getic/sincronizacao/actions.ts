'use server';

import { createSynchronization } from "@/app/data-access/synchronization";
import { syncSalesData } from "@/app/lib/legacy-data-synchronization/syncData";
import { revalidatePath } from "next/cache";

export async function initSynchronization(previousState: any, formData: FormData){
    console.log('🔁 ACTION - INIT SYNCHRONIZATION');

    const initialDate = formData.get('initialDate') as string;
    const finalDate = formData.get('finalDate') as string;

    const [totalCreatedDB2Data, totalUpdatedDB2Data] = await syncSalesData(initialDate, finalDate, 'DB2');
    const [totalCreatedDB2CZSData, totalUpdatedDB2CZSData] = await syncSalesData(initialDate, finalDate, 'DB2CZS');


    await createSynchronization({
        createdData: totalCreatedDB2Data + totalCreatedDB2CZSData,
        updatedData: totalUpdatedDB2Data + totalUpdatedDB2CZSData,
    });

    revalidatePath('/getic/sincronizacao/');
}