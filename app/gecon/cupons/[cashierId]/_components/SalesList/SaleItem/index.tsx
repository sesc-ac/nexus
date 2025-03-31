import styles from './SaleItem.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import Image from 'next/image';
import scheduleIcon from '@/public/schedule.svg'
import Badge from '@/app/_ui/Badge';
import openIcon from '@/public/open_in_new.svg';
import { valueToCurrency } from '@/app/_utils/dataFormat';
import { Decimal } from '@prisma/client/runtime/library';

export default function SaleItem({
    category,
    costumer,
    legacyId,
    time,
    value
}: {
    category: string | null;
    costumer: string | null;
    legacyId: number;
    time: string;
    value: Decimal;
}){
    return (
        <div className={ styles.saleItem }>
            <Flexbox spaceBetween>
                <Flexbox gapLg>
                    <Badge>#{ legacyId }</Badge>
                    <p className='sm'><b>{ costumer }</b></p>
                    <p className='clr-text-light sm'><b>{ category }</b></p>

                    <Flexbox>
                        <Image
                            alt="Horário da venda"
                            src={ scheduleIcon }
                        />

                        <p className='clr-text-light sm'><b>{ time }</b></p>
                    </Flexbox>
                </Flexbox>

                <Flexbox>
                    <Badge>Pendente</Badge>
                    <Badge>{ valueToCurrency(value) }</Badge>

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