import { fetchCashiersTotals } from "@/app/_data-access/cashier";
import Flexbox from "@/app/_ui/Flexbox";
import KPI from "@/app/_ui/KPI";
import { valueToCurrency } from "@/app/_utils/dataFormat";

type CashierKPIsProps = {
    initialDate: string,
    finalDate?: string
}

export default async function CashiersKPIs({ initialDate, finalDate }: CashierKPIsProps){
    const totals = await fetchCashiersTotals(initialDate, finalDate as string);

    return(
        <Flexbox>
            <KPI 
                title="Total Recebido"
                value={ valueToCurrency(totals[0].TOTALVENDIDO) }
            />

            <KPI 
                title="Vendas"
                value={ `${totals[0].QTDVENDAS}` }
            />

            <KPI 
                title="Caixas"
                value={ `${totals[0].QTDCAIXA}` }
            />
        </Flexbox>
    );
}