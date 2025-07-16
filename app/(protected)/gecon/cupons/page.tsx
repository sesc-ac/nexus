import { Suspense } from "react";
import DateRangeForm from "./components/DateRangeForm";
import SalesKPIs from "./components/SalesKPIs";
import SalesList from "./components/SalesList";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined  }>
}){
    console.log('📄 PAGE - CUPONS');

    const { 
        initialDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0],
        finalDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0],
    } = await searchParams;

    const salesKPIsKey = `${initialDate}KPIsKey`;
    const salesListsKey = `${initialDate}ListKey`;

    return(
        <>
            <h2>Vendas</h2>
            
            <DateRangeForm 
                initialDate={ initialDate as string }
                finalDate={ finalDate as string }
            />

            <Suspense 
                fallback={ <div>Carregando...</div> } 
                key={ salesKPIsKey }
            >
                <SalesKPIs 
                    initialDate={ new Date(initialDate as string) }
                    finalDate={ new Date(finalDate as string) }
                />
            </Suspense>

            <Suspense 
                fallback={ <div>Carregando...</div> } 
                key={ salesListsKey }
            >
                <SalesList 
                    initialDate={ new Date(initialDate as string) }
                    finalDate={ new Date(finalDate as string) }
                />
            </Suspense>
        </>
    );
}