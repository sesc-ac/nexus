import styles from './CashierItem.module.css';
import Image from "next/image";
import locationIcon from '@/public/location_on.svg';
import domainIcon from '@/public/domain.svg';
import scheduleIcon from '@/public/schedule.svg';
import calendarIcon from '@/public/calendar_month.svg';
import paidIcon from '@/public/paid.svg';
import bagIcon from '@/public/shopping_bag.svg';
import Link from 'next/link';
import Badge from '@/app/_ui/Badge';
import Flexbox from '@/app/_ui/Flexbox';
import Divider from '@/app/_ui/Divider';
import { dateToString, valueToCurrency } from '@/app/_utils/dataFormat';
import { Cashier } from '@prisma/client';

export default function CashierItem({
    closeTime,
    id,
    legacyId,
    location,
    openDate,
    openTime,
    operator,
    totalSalesQuantity,
    totalSalesValue,
    unit,
}: Cashier){
    return(
        <Link href={ `/gecon/cupons/${id}` } className={ styles.cashierItem }>
            <Flexbox spaceBetween>
                <Flexbox>
                    <h3 className='md'>
                        <b><span className="clr-text-light">#{ legacyId } •</span> { operator }</b>
                    </h3>
                    
                    <Badge>{ closeTime ? 'Fechado' : 'Aberto' }</Badge>
                </Flexbox>

                <p className='clr-text-light'><b>Cupons Emitidos (0/{ totalSalesQuantity })</b></p>
            </Flexbox>

            <Flexbox gapLg>
                <Flexbox gapSm>
                    <Image
                        alt="Unidade"
                        className={ styles.cashier__infoItemIcon }
                        src={ locationIcon }
                    />

                    <p className='clr-text-light sm'><b>{ unit }</b></p>
                </Flexbox>

                <Flexbox gapSm>
                    <Image
                        alt="Local de Venda"
                        className={ styles.cashier__infoItemIcon }
                        src={ domainIcon }
                    />

                    <p className='clr-text-light sm'><b>{ location }</b></p>
                </Flexbox>

                <Flexbox gapSm>
                    <Image
                        alt="Data de abertura do Caixa"
                        className={ styles.cashier__infoItemIcon }
                        src={ calendarIcon }
                    />

                    <p className='clr-text-light sm'><b>{ dateToString(openDate) }</b></p>
                </Flexbox>

                <Flexbox gapSm>
                    <Image
                        alt="Horário de abertura e fechamento do Caixa"
                        className={ styles.cashier__infoItemIcon }
                        src={ scheduleIcon }
                    />

                    <p className='clr-text-light sm'><b>{ openTime } { closeTime && ` • ${closeTime}` }</b></p>
                </Flexbox>
            </Flexbox>

            <Divider/>

            <Flexbox gapLg>
                <Flexbox gapSm>
                    <Image
                        alt="Total de Vendas"
                        className={ styles.cashier__infoItemIcon }
                        src={ paidIcon }
                    />

                    <p className='clr-text-light sm'><b>{ valueToCurrency(totalSalesValue) }</b></p>
                </Flexbox>

                <Flexbox gapSm>
                    <Image
                        alt="Quantidade de Vendas"
                        className={ styles.cashier__infoItemIcon }
                        src={ bagIcon }
                    />

                    <p className='clr-text-light sm'><b>{ totalSalesQuantity }</b></p>
                </Flexbox>
            </Flexbox>
        </Link>
    )
}