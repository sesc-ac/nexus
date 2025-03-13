import { fetchCashiers } from "@/app/data-access/cashier";
import styles from './CashierList.module.css';
import Image from "next/image";
import locationIcon from '@/public/location_on.svg';
import domainIcon from '@/public/domain.svg';
import scheduleIcon from '@/public/schedule.svg';

export default async function CashiersList() {
    const cashiers = await fetchCashiers();

    return(
        <ul className={ styles.cashierList }>
            {cashiers.map((cashier: any) => {
                return(
                    <li className={ styles.cashierItem } key={cashier.SQCAIXA}>
                        <p className={ styles.cashier__status }>Aberto</p>
                        <h3 className={ styles.cashier__id }>#{ cashier.SQCAIXA } - <span className={ styles.cashier__name }>{ cashier.NMPESSOA }</span></h3>

                        <div className={ styles.cashier__info }>
                            <div className={ styles.cashier__infoItem }>
                                <Image
                                    alt="Localização"
                                    className={ styles.cashier__infoItemIcon }
                                    src={ locationIcon }
                                />

                                <p>Rio Branco - AC</p>
                            </div>

                            <div className={ styles.cashier__infoItem }>
                                <Image
                                    alt="Unidade Operacional"
                                    className={ styles.cashier__infoItemIcon }
                                    src={ domainIcon }
                                />

                                <p>SESC BOSQUE</p>
                            </div>
                        </div>

                        <div className={ styles.divider }></div>

                        <div className={ styles.cashier__infoItem }>
                            <Image
                                alt="Horário de abertura e fechamento do Caixa"
                                className={ styles.cashier__infoItemIcon }
                                src={ scheduleIcon }
                            />

                            <p>{ cashier.HRABERTURA }</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}