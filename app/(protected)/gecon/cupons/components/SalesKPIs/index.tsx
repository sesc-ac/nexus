import { getSalesTotals } from "@/app/data-access/sale";
import Flexbox from "@/app/ui/Flexbox";
import KPI from "@/app/ui/KPI";
import { valueToCurrency } from "@/app/utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";

type SalesKPIsProps = {
    initialDate: Date,
    finalDate: Date
}

export default async function SalesKPIs({ initialDate, finalDate }: SalesKPIsProps){
    console.log('COMPONENT SALES KPIS');
    
    const totals = await getSalesTotals(initialDate, finalDate);

    return(
        <Flexbox>
            <KPI 
                title="Total Recebido"
                value={ totals._sum.value ? valueToCurrency(totals._sum.value as Decimal) : valueToCurrency(0) }
            />

            <KPI 
                title="Vendas"
                value={ totals._count.id }
            />

            <KPI 
                title="Cupons Emitidos (0%)"
                value={ `0/${totals._count.id}` }
            />
        </Flexbox>
    );
}