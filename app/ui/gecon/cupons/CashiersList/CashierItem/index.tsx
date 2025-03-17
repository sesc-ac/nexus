import styles from './CashierItem.module.css';
import Image from "next/image";
import locationIcon from '@/public/location_on.svg';
import domainIcon from '@/public/domain.svg';
import scheduleIcon from '@/public/schedule.svg';
import calendarIcon from '@/public/calendar_month.svg';
import paidIcon from '@/public/paid.svg';
import bagIcon from '@/public/shopping_bag.svg';


type CashierItemProps = {
    id: string;
    operator: string;
    totalSalesValue: string;
    totalSalesQuantity: string;
    location: string;
    unit: string;
    openDate: string;
    openTime: string;
    closeTime?: string;
}

export default function CashierItem({
    id,
    operator,
    totalSalesValue,
    totalSalesQuantity,
    location,
    unit,
    openDate,
    openTime,
    closeTime
}: CashierItemProps){
    return(
        <li className={ styles.cashierItem }>
            <p className={ styles.cashier__status }>{ closeTime ? 'Fechado' : 'Aberto' }</p>

            <h3 className={ styles.cashier__id }>#{ id } - <span className={ styles.cashier__name }>{ operator }</span></h3>

            <div className={ styles.cashier__info }>
                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Total de Vendas"
                        className={ styles.cashier__infoItemIcon }
                        src={ paidIcon }
                    />

                    <p>{ totalSalesValue }</p>
                </div>

                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Quantidade de Vendas"
                        className={ styles.cashier__infoItemIcon }
                        src={ bagIcon }
                    />

                    <p>{ totalSalesQuantity }</p>
                </div>
                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Localização"
                        className={ styles.cashier__infoItemIcon }
                        src={ locationIcon }
                    />

                    <p>{ location }</p>
                </div>

                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Unidade Operacional"
                        className={ styles.cashier__infoItemIcon }
                        src={ domainIcon }
                    />

                    <p>{ unit }</p>
                </div>
            </div>

            <div className={ styles.divider }></div>

            <div className={ styles.cashier__info }>
                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Data de abertura do Caixa"
                        className={ styles.cashier__infoItemIcon }
                        src={ calendarIcon }
                    />
                    <p>{ openDate }</p>
                </div>

                <div className={ styles.cashier__infoItem }>
                    <Image
                        alt="Horário de abertura e fechamento do Caixa"
                        className={ styles.cashier__infoItemIcon }
                        src={ scheduleIcon }
                    />

                    <p>{ openTime } { closeTime && ` - ${closeTime}` }</p>
                </div>
            </div>
        </li>
    )
}