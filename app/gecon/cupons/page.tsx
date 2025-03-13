import CashiersList from "@/app/ui/gecon/cupons/CashiersList";
import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";
import { Suspense } from "react";
import styles from './page.module.css';

export default async function Page(){
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

                <div className={ styles.dateRangeGroup }>
                    <label className={ styles.label }>Período</label>

                    <div className={ styles.group }>
                        <input className={ styles.input } type="date" />
                        <input className={ styles.input } type="date" />
                    </div>
                </div>

                <Suspense fallback={<div>Carregando lista...</div>}>
                    <CashiersList />
                </Suspense>
            </PageContainer>
        </>
    );
}