import CashiersList from "@/app/ui/gecon/cupons/CashiersList";
import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";
import { Suspense } from "react";
import styles from './page.module.css';
import CashierDateRangeSearch from "@/app/ui/gecon/cupons/CashierDateRangeSearch";

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
            <PageTitle
                title="Cupons Fiscais"
                subtitle="Aqui você gerencia os cupons fiscais das movimentações dos PDVs."
            />
            
            <PageContainer>
                <h2>Caixas</h2>

                <div className={ styles.cashiers__kpis}>
                    <div className={ styles.kpi }>
                        <p className={ styles.kpi__title }>Total Recebido</p>
                        <p className={ styles.kpi__value }>R$ 1.000.000,00</p>
                    </div>

                    <div className={ styles.kpi }>
                        <p className={ styles.kpi__title }>Vendas</p>
                        <p className={ styles.kpi__value }>1000</p>
                    </div>

                    <div className={ styles.kpi }>
                        <p className={ styles.kpi__title }>Caixas</p>
                        <p className={ styles.kpi__value }>5</p>
                    </div>
                </div>

                <CashierDateRangeSearch />

                <Suspense key={ initialDate } fallback={<div>Carregando lista...</div>}>
                    <CashiersList 
                        initialDate={ initialDate }
                        finalDate={ finalDate }
                    />
                </Suspense>
            </PageContainer>
        </>
    );
}