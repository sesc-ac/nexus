import CashiersList from "./_components/CashiersList";
import { Suspense } from "react";
import styles from './page.module.css';
import CashierDateRangeSearch from "./_components/CashierDateRangeSearch";
import KPI from "@/app/_ui/KPI";
import Flexbox from "@/app/_ui/Flexbox";

export default async function Page(
    props: {
        searchParams?: Promise<{ 
            initialDate: string, 
            finalDate?: string 
        }>;
    }
){
    const searchParams = await props.searchParams;
    const initialDate = searchParams?.initialDate as string || new Date().toISOString().split('T')[0];
    const finalDate = searchParams?.finalDate as string;

    return(
        <>
            <h2>Caixas</h2>

            <Flexbox>
                <KPI
                    title='Total Recebido'
                    value='R$ 1.000.000,00'
                />

                <KPI
                    title='Vendas'
                    value='1000'
                />

                <KPI
                    title='Caixas'
                    value='5'
                />
            </Flexbox>    

            <CashierDateRangeSearch />

            <Suspense key={ initialDate } fallback={<div>Carregando lista...</div>}>
                <CashiersList 
                    initialDate={ initialDate }
                    finalDate={ finalDate }
                />
            </Suspense>
        </>
    );
}