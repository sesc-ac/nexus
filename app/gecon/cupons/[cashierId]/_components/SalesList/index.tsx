import { Decimal } from "@prisma/client/runtime/library";
import SaleItem from "./SaleItem";
import { getSales } from "@/app/_data-access/cashier";

export default async function SalesList({
    cashierId
}: {
    cashierId: number
}){
    const sales = await getSales(cashierId);

    return(
        <ul>
            {sales.map((sale) => (
                <SaleItem 
                    category={ sale.category }
                    costumer={ sale.costumer }
                    key={ sale.id }
                    legacyId={ sale.legacyId as number }
                    time={ sale.time as string }
                    value={ sale.value as Decimal }
                />
            ))}
        </ul>
    );
}