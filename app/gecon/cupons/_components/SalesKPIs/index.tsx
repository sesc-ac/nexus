import { getCashiersTotals } from "@/app/_data-access/cashier";
import Flexbox from "@/app/_ui/Flexbox";
import KPI from "@/app/_ui/KPI";
import { valueToCurrency } from "@/app/_utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";

type CashierKPIsProps = {
    initialDate: Date,
    finalDate: Date
}

export default async function SalesKPIs({ initialDate, finalDate }: CashierKPIsProps){
    const totals = await getCashiersTotals(initialDate, finalDate);

    return(
        <Flexbox>
            <KPI 
                title="Total Recebido"
                value={ totals._sum.totalSalesValue ? valueToCurrency(totals._sum.totalSalesValue as Decimal) : valueToCurrency(0) }
            />

            <KPI 
                title="Vendas"
                value={ totals._sum.totalSalesQuantity ? totals._sum.totalSalesQuantity : 0 }
            />

            <KPI 
                title="Caixas"
                value={ totals._count.id }
            />
        </Flexbox>
    );
}