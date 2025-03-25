import styles from './page.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import KPI from '@/app/_ui/KPI';
import Box from '@/app/_ui/Box';
import SalesList from './_components/SalesList';
import Badge from '@/app/_ui/Badge';
import { fetchCashier } from '@/app/_data-access/cashier';
import RadioInput from '@/app/_ui/RadioInput';
import { Button } from '@/app/_ui/Button';

export default async function Page({
    params
}: {
    params: Promise<{ cashier: string }>
}){
    const { cashier } = await params;

    const date = cashier.slice(0, 10);
    const id = cashier.split('-')[3];
    const locationId = cashier.split('-')[4];

    const fetchedCashier = await fetchCashier(id, date);

    return(
        <>
            <Flexbox>
                <h2>Caixa #{ id }</h2>
                <Badge>{ fetchedCashier[0].HRFECHAMEN ? 'Fechado' : 'Aberto' }</Badge>
            </Flexbox>

            <Box
                fill
                radius
                smallGap
            >
                <p><b>Operador:</b> { fetchedCashier[0].NMPESSOA }</p>
                <p><b>Abertura:</b> { fetchedCashier[0].DTABERTURA } • { fetchedCashier[0].HRABERTURA }</p>
                { fetchedCashier[0].HRFECHAMEN && <p><b>Fechamento:</b> { fetchedCashier[0].DTFECHAMEN } • { fetchedCashier[0].HRFECHAMEN }</p>}
                <p><b>Unidade:</b> { fetchedCashier[0].DSLOCVENDA } • { fetchedCashier[0].NMUOP }</p>
            </Box>

            <Flexbox>
                <KPI
                    title='Total Recebido'
                    value={ `R$ ${fetchedCashier[0].TOTALVENDIDO}` }
                />

                <KPI
                    title='Vendas'
                    value={ fetchedCashier[0].QTDVENDAS }
                />

                <KPI
                    title='Cupons Emitidos (0%)'
                    value={ `0/${ fetchedCashier[0].QTDVENDAS }`}
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
                cashier={ id }
                date={ date }
            />
        </>
    );
}