import styles from './SalesList.module.css';
import { getSalesByDateRange, SaleWithRelations } from "@/app/data-access/sale";
import SalesListItem from './SalesListItem';
import { Sale } from '@prisma/client';

type SalesListProps = {
    initialDate: Date,
    finalDate: Date,
}

export default async function SalesList({ 
    initialDate, 
    finalDate,
}: SalesListProps){
    console.log('SALES LIST COMPONENT');

    const sales = await getSalesByDateRange(initialDate, finalDate);

    return(
        <>
            <ul className={ styles.salesList }>
                {sales.map((sale: SaleWithRelations) => (
                    <SalesListItem
                        key={ sale.id }
                        sale={ sale }             
                    />
                ))}
            </ul>
        </>
    );
}