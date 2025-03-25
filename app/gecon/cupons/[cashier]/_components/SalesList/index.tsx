import SaleItem from "./SaleItem";
import { fetchSales } from "@/app/_data-access/cashier";

type FetchedSaleProps = {
    DSCATEGORI: string,
    DTVENDA: string,
    HRVENDA: string,
    NMCLIENTE: string,
    SQCAIXA: string,
    SQVENDA: string,
    VLRECEBIDO: string
}

export default async function SalesList({ 
    cashier, 
    date 
}: {
    cashier: string,
    date: string
}){
    const sales = await fetchSales(cashier, date);

    return(
        <div>
            {sales.map((sale: FetchedSaleProps) => (
                <SaleItem 
                    category={ sale.DSCATEGORI ? sale.DSCATEGORI : 'VENDA AVULSA' }
                    costumer={ sale.NMCLIENTE ? sale.NMCLIENTE : 'VENDA AVULSA' }
                    id={ sale.SQVENDA }
                    key={ sale.SQVENDA }
                    saleTime={ sale.HRVENDA }
                    saleValue={ sale.VLRECEBIDO }
                />
            ))}
        </div>
    );
}