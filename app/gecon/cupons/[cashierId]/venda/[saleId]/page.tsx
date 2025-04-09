import SaleAside from "../../_components/SaleAside";

export default async function Page({
    params
}: {
    params: Promise<{ cashierId: string, saleId: string }>
}){
    const { saleId } = await params;

    return(
        <>
            <SaleAside id={ Number(saleId) } />
        </>
    );
}