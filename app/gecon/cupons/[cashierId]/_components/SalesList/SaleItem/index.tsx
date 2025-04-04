import styles from './SaleItem.module.css';
import Flexbox from '@/app/_ui/Flexbox';
import Image from 'next/image';
import scheduleIcon from '@/public/icons/schedule.svg'
import Badge from '@/app/_ui/Badge';
// import openIcon from '@/public/open_in_new.svg';
import { valueToCurrency } from '@/app/_utils/dataFormat';
import { Decimal } from '@prisma/client/runtime/library';
import IconButton from '@/app/_ui/IconButton';
import receiptIcon from '@/public/icons/receipt.svg';

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
        <li className={ styles.saleItem }>
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
                    <Badge>
                        <Image 
                            alt='Situação do Cupom Fiscal'
                            src={ receiptIcon }
                        />

                        Pendente
                    </Badge>

                    <Badge>{ valueToCurrency(value) }</Badge>

                    <IconButton icon='openPanel'/>
                </Flexbox>
            </Flexbox>
        </li>
    );
}