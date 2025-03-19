import { fetchCashiers } from "@/app/_data-access/cashier";
import styles from './CashierList.module.css';
import CashierItem from "./CashierItem";

type CashierListProps = {
    initialDate: string,
    finalDate?: string
}

type FetchedCashierProps = {
    DSLOCVENDA: string,
    DTABERTURA: string,
    HRABERTURA: string,
    HRFECHAMEN: string,
    NMPESSOA: string,
    NMUOP: string,
    QTDVENDAS: string
    TOTALVENDIDO: string
    SQCAIXA: string
}

export default async function CashiersList({ initialDate, finalDate }: CashierListProps){
    const cashiers = await fetchCashiers(initialDate, finalDate as string);

    return(
        <ul className={ styles.cashierList }>
            {cashiers.map((cashier: FetchedCashierProps) => (
                    <CashierItem 
                        closeTime={ cashier.HRFECHAMEN }
                        id={ cashier.SQCAIXA }
                        key={ `${cashier.SQCAIXA}-${cashier.DTABERTURA}` }
                        location={ cashier.NMUOP }
                        openDate={ cashier.DTABERTURA }
                        openTime={ cashier.HRABERTURA }
                        operator={ cashier.NMPESSOA }
                        totalSalesQuantity={ cashier.QTDVENDAS }
                        totalSalesValue={ `R$ ${cashier.TOTALVENDIDO}` }
                        unit={ cashier.DSLOCVENDA }
                    />
                )
            )}
        </ul>
    );
}