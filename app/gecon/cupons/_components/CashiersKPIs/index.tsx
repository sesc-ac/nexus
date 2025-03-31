import { getCashiersTotals } from "@/app/_data-access/cashier";
import Flexbox from "@/app/_ui/Flexbox";
import KPI from "@/app/_ui/KPI";
import { valueToCurrency } from "@/app/_utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";

type CashierKPIsProps = {
    initialDate: Date,
    finalDate: Date
}

export default async function CashiersKPIs({ initialDate, finalDate }: CashierKPIsProps){
    const totals = await getCashiersTotals(initialDate, finalDate);

    return(
        <Flexbox>
            <KPI 
                title="Total Recebido"
                value={ valueToCurrency(totals._sum.totalSalesValue as Decimal) }
            />

            <KPI 
                title="Vendas"
                value={ totals._sum.totalSalesQuantity as number }
            />

            <KPI 
                title="Caixas"
                value={ totals._count.id }
            />
        </Flexbox>
    );
}