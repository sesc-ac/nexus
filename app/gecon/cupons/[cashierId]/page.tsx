import Flexbox from '@/app/_ui/Flexbox';
import KPI from '@/app/_ui/KPI';
import Box from '@/app/_ui/Box';
import SalesList from './_components/SalesList';
import Badge from '@/app/_ui/Badge';
import { getCashier } from '@/app/_data-access/cashier';
import RadioInput from '@/app/_ui/RadioInput';
import { Button } from '@/app/_ui/Button';
import { dateToString, valueToCurrency } from '@/app/_utils/dataFormat';
import { Decimal } from '@prisma/client/runtime/library';

export default async function Page({
    params
}: {
    params: Promise<{ cashierId: string }>
}){
    const { cashierId } = await params;

    const cashier = await getCashier(Number(cashierId));

    return(
        <>
            <Flexbox>
                <h2>Caixa #{ cashierId }</h2>
                <Badge>{ cashier?.openStatus ? 'Aberto' : 'Fechado' }</Badge>
            </Flexbox>

            <Box
                fill
                radius
                smallGap
            >
                <p><b>Operador:</b> { cashier?.operator }</p>
                <p><b>Abertura:</b> { dateToString(cashier?.openDate as Date) } • { cashier?.openTime }</p>
                { !cashier?.openStatus && <p><b>Fechamento:</b> { dateToString(cashier?.closeDate as Date) } • { cashier?.closeTime }</p>}
                <p><b>Unidade:</b> { cashier?.location } • { cashier?.unit }</p>
            </Box>

            <Flexbox>
                <KPI
                    title='Total Recebido'
                    value={ valueToCurrency(cashier?.totalSalesValue as Decimal) }
                />

                <KPI
                    title='Vendas'
                    value={ cashier?.totalSalesQuantity as number }
                />

                <KPI
                    title='Cupons Emitidos (0%)'
                    value={ `0/${cashier?.totalSalesQuantity}`}
                />
            </Flexbox>

            <h2>Vendas</h2>

            <Flexbox
                alignEnd 
                spaceBetween
            >
                <Flexbox column>
                    <label htmlFor="salesFilter">Filtros</label>

                    <Flexbox>
                        <RadioInput 
                            defaultChecked
                            id='salesFilter'
                            labelText='Todas'
                            name='salesFilter'
                        />

                        <RadioInput
                            id='salesFilterPending'
                            labelText='Cupons Pendentes'
                            name='salesFilter'
                        />

                        <RadioInput
                            id='salesFilterAvailable'
                            labelText='Cupons Disponíveis'
                            name='salesFilter'
                        />
                    </Flexbox>
                </Flexbox>

                <Button>Emitir Cupons do Caixa</Button>
            </Flexbox>

            <SalesList 
                cashierId={Number(cashierId)}
            />
        </>
    );
}