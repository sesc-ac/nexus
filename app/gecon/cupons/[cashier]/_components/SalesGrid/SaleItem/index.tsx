import Box from '@/app/_ui/Box';
import styles from './SaleItem.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import Image from 'next/image';
import scheduleIcon from '@/public/schedule.svg'
import Badge from '@/app/_ui/Badge';

type SaleItemProps = {
    category: string,
    costumer: string,
    id: string,
    saleTime: string,
    saleValue: string,
}

export default function SaleItem({
    category,
    costumer,
    id,
    saleTime,
    saleValue
}: SaleItemProps){
    return (
        <Box>
            <Flexbox column>
                <Flexbox>
                    <Badge>#{ id }</Badge>
                    <Badge>R$ { saleValue }</Badge>
                </Flexbox>

                <p><b>{ costumer }</b></p>

                <p className='clr-text-light'><b>{ category }</b></p>
            </Flexbox>

            <Flexbox>
                <Image
                    alt="Horário de abertura e fechamento do Caixa"
                    className={ styles.cashier__infoItemIcon }
                    src={ scheduleIcon }
                />

                <p className='clr-text-light'><b>{ saleTime }</b></p>
            </Flexbox>
        </Box>
    );
}