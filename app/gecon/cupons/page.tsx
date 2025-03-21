import CashiersList from "./_components/CashiersList";
import { Suspense } from "react";
import KPI from "@/app/_ui/KPI";
import Flexbox from "@/app/_ui/Flexbox";
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

    console.log(initialDate, finalDate, filter);

    const CashiersKPIsKey = `${initialDate}KPIsKey`;
    const CashiersListsKey = `${initialDate}ListKey`;
    
    return(
        <>
            <h2>Caixas</h2>

            <CashiersDateRangeForm />

            <Suspense key={ CashiersKPIsKey } fallback={<div>Carregando Informações.......</div>}>
                <CashiersKPIs 
                    initialDate={ initialDate as string }
                    finalDate={ finalDate as string }
                />
            </Suspense>

            <Suspense key={ CashiersListsKey } fallback={<div>Carregando Informações.......</div>}>
                <CashiersList 
                    initialDate={ initialDate as string }
                    finalDate={ finalDate as string }
                />
            </Suspense>
        </>
    );
}