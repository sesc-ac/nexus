import CashiersList from "@/app/ui/gecon/cupons/CashiersList";
import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";


export default async function Page(){
    
    return(
        <>
            <PageTitle
                title="Cupons Fiscais"
                subtitle="Aqui você gerencia os cupons fiscais das movimentações dos PDVs."
            />
            
            <PageContainer>
                <h2>Caixas</h2>
                <CashiersList />
            </PageContainer>
        </>
    );
}