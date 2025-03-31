import CashiersList from "./_components/CashiersList";
import { Suspense } from "react";
import CashiersDateRangeForm from "./_components/CashiersDateRangeForm";
import CashiersKPIs from "./_components/CashiersKPIs";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined  }>
}){
    const { 
        initialDate = new Date().toISOString().split('T')[0], 
        finalDate = new Date().toISOString().split('T')[0],
        filter
    } = await searchParams;

    const CashiersKPIsKey = `${initialDate}KPIsKey`;
    const CashiersListsKey = `${initialDate}ListKey`;
    
    return(
        <>
            <h2>Caixas</h2>

            <CashiersDateRangeForm 
                initialDate={ initialDate as string }
                finalDate={ finalDate as string }
            />

            <Suspense key={ CashiersKPIsKey } fallback={<div>Carregando Informações.......</div>}>
                <CashiersKPIs 
                    initialDate={ new Date(initialDate as string) }
                    finalDate={ new Date(finalDate as string) }
                />
            </Suspense>

            <Suspense key={ CashiersListsKey } fallback={<div>Carregando Informações.......</div>}>
                <CashiersList 
                    initialDate={ new Date(initialDate as string) }
                    finalDate={ new Date(finalDate as string) }
                />
            </Suspense>
        </>
    );
}