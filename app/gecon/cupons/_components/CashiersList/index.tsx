import { fetchCashiers } from "@/app/_data-access/cashier";
import styles from './CashierList.module.css';
import CashierItem from "./CashierItem";
import CashierStatusFilter from "./CashierStatusFilter";
import Flexbox from "@/app/_ui/Flexbox";
import { Button } from "@/app/_ui/Button";

type CashierListProps = {
    initialDate: string,
    finalDate?: string,
    filter?: string
}

type FetchedCashierProps = {
    CDLOCVENDA: string,
    DSLOCVENDA: string,
    DTABERTURA: string,
    HRABERTURA: string,
    HRFECHAMEN: string,
    NMPESSOA: string,
    NMUOP: string,
    QTDVENDAS: string,
    TOTALVENDIDO: string,
    SQCAIXA: string
}

export default async function CashiersList({ 
    initialDate, 
    finalDate 
}: CashierListProps){
    const cashiers = await fetchCashiers(initialDate, finalDate as string);

    return(
        <>
            <Flexbox
                alignEnd 
                spaceBetween
            >
                <CashierStatusFilter/>

                <Button>Emitir cupons do período</Button>
            </Flexbox>

            <ul className={ styles.cashiersList }>
                {cashiers.map((cashier: FetchedCashierProps) => (
                        <CashierItem 
                            closeTime={ cashier.HRFECHAMEN }
                            id={ cashier.SQCAIXA }
                            key={ `${cashier.SQCAIXA}-${cashier.DTABERTURA}-${cashier.CDLOCVENDA}` }
                            location={ cashier.DSLOCVENDA }
                            locationId={ cashier.CDLOCVENDA }
                            openDate={ cashier.DTABERTURA }
                            openTime={ cashier.HRABERTURA }
                            operator={ cashier.NMPESSOA }
                            totalSalesQuantity={ cashier.QTDVENDAS }
                            totalSalesValue={ cashier.TOTALVENDIDO }
                            unit={ cashier.NMUOP }
                        />
                    )
                )}
            </ul>
        </>
    );
}