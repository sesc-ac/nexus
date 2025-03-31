import { getCashiersByDateRange } from "@/app/_data-access/cashier";
import styles from './CashierList.module.css';
import CashierItem from "./CashierItem";
import CashierStatusFilter from "./CashierStatusFilter";
import Flexbox from "@/app/_ui/Flexbox";
import { Button } from "@/app/_ui/Button";

type CashierListProps = {
    initialDate: Date,
    finalDate: Date,
    filter?: string
}

export default async function CashiersList({ 
    initialDate, 
    finalDate,
    filter 
}: CashierListProps){
    const cashiers = await getCashiersByDateRange(initialDate, finalDate)

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
                {cashiers.map((cashier) => (
                    <CashierItem
                        closeDate={ cashier.closeDate }
                        closeTime={ cashier.closeTime }
                        id={ cashier.id }
                        key={ cashier.id }
                        legacyId={ cashier.legacyId }
                        location={ cashier.location }
                        locationId={ cashier.locationId } 
                        openDate={ cashier.openDate } 
                        openStatus={ cashier.openStatus } 
                        openTime={ cashier.openTime } 
                        operator={ cashier.operator } 
                        totalSalesQuantity={ cashier.totalSalesQuantity } 
                        totalSalesValue={ cashier.totalSalesValue } 
                        unit={ cashier.unit }                        
                    />
                ))}
            </ul>
        </>
    );
}