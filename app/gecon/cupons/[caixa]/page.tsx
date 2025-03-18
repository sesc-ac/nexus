import styles from './page.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import KPI from '@/app/_ui/KPI';
import Box from '@/app/_ui/Box';
import SalesGrid from './_components/SalesGrid';
import Badge from '@/app/_ui/Badge';

export default function Page(){
    return(
        <>
            <Flexbox>
                <h2>Caixa #365</h2>
                <Badge>Fechado</Badge>
            </Flexbox>

            <Box
                fill
                radius
                smallGap
            >
                <p><b>Operador:</b> Jeferson Barbosa</p>
                <p><b>Abertura:</b> 30/03/2025 • 07:58:30</p>
                <p><b>Fechamento:</b> 30/03/2025 • 20:58:30</p>
                <p><b>Unidade:</b> SESC Bosque, Rio Branco - AC</p>
            </Box>

            <Flexbox>
                <KPI
                    title='Total Recebido'
                    value='R$ 1.000.000,00'
                />

                <KPI
                    title='Vendas'
                    value='100'
                />
            </Flexbox>

            <h2>Vendas</h2>

            <SalesGrid />
        </>
    );
}