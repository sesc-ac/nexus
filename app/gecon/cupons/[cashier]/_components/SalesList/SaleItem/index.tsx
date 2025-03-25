import Box from '@/app/_ui/Box';
import styles from './SaleItem.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import Image from 'next/image';
import scheduleIcon from '@/public/schedule.svg'
import Badge from '@/app/_ui/Badge';
import openIcon from '@/public/open_in_new.svg';
import { valueToCurrency } from '@/app/_utils/dataFormat';

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
        <div className={ styles.saleItem }>
            <Flexbox spaceBetween>
                <Flexbox gapLg>
                    <Badge>#{ id }</Badge>
                    <p className='sm'><b>{ costumer }</b></p>
                    <p className='clr-text-light sm'><b>{ category }</b></p>

                    <Flexbox>
                        <Image
                            alt="Horário da venda"
                            src={ scheduleIcon }
                        />

                        <p className='clr-text-light sm'><b>{ saleTime }</b></p>
                    </Flexbox>
                </Flexbox>

                <Flexbox>
                    <Badge>Pendente</Badge>
                    <Badge>{ valueToCurrency(saleValue) }</Badge>

                    <button className={ styles.openButton }>
                        <Image 
                            alt="Abrir detalhes da venda"
                            src={ openIcon }
                        />  
                    </button>
                </Flexbox>
            </Flexbox>
        </div>
    );
}