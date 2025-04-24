import CashiersList from "./_components/CashiersList";
import { Suspense } from "react";
import CashiersDateRangeForm from "./_components/CashiersDateRangeForm";
import CashiersKPIs from "./_components/CashiersKPIs";
import { getSales } from "@/app/_data-access/sale";
import Badge from "@/app/_ui/Badge";
import KPI from "@/app/_ui/KPI";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined  }>
}){
    // const { 
    //     initialDate = new Date().toISOString().split('T')[0], 
    //     finalDate = new Date().toISOString().split('T')[0],
    //     // filter
    // } = await searchParams;

    // const CashiersKPIsKey = `${initialDate}KPIsKey`;
    // const CashiersListsKey = `${initialDate}ListKey`;

    const sales = await getSales();

    return(
        <>
            <h2>Vendas</h2>

            <KPI
                title="Vendas"
                value={ sales.length }
            />

            <ul>
                {sales.map((sale) => (
                    <li key={ sale.id }>
                        <Badge>#{ sale.id }</Badge>

                        <p>{ sale.costumer }</p>
                        <p>{ sale.date }</p>
                        <p>{ sale.time }</p>
                    </li>
                ))}
            </ul>

            {/* <Suspense key={ CashiersKPIsKey } fallback={<div>Carregando Informações.......</div>}>
                <CashiersKPIs 
                    initialDate={ new Date(initialDate as string) }
                    finalDate={ new Date(finalDate as string) }
                />
            </Suspense> */}

            {/* <h2>Caixas</h2>

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
            </Suspense> */}
        </>
    );
}