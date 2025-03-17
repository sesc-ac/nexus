import { fetchCashiers } from "@/app/data-access/cashier";
import styles from './CashierList.module.css';
import CashierItem from "./CashierItem";

type CashierListProps = {
    initialDate: string;
    finalDate?: string;
}

export default async function CashiersList({ initialDate, finalDate }: CashierListProps){
    const cashiers = await fetchCashiers(initialDate, finalDate as string);

    return(
        <ul className={ styles.cashierList }>
            {cashiers.map((cashier: any) => {
                return(
                    <CashierItem 
                        key={`${cashier.SQCAIXA}-${cashier.DTABERTURA}`}
                        id={ cashier.SQCAIXA }
                        operator={ cashier.NMPESSOA }
                        totalSalesValue={ '100000' }
                        totalSalesQuantity={ '50' }
                        location={ 'Rio Branco - AC' }
                        unit={ 'SESC BOSQUE' }
                        openDate={ cashier.DTABERTURA }
                        openTime={ cashier.HRABERTURA }
                        closeTime={ cashier.HRFECHAMEN }
                    />
                );
            })}
        </ul>
    );
}