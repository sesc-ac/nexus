import PageTitle from "@/app/ui/PageTitle";
import PageContainer from "@/app/ui/PageContainer";
import Box from "@/app/ui/Box";
import SyncForm from "./components/SyncForm";
import SyncList from './components/SyncList';

export default async function Page(){
    return (
        <>
            <PageTitle
                title="Sincronização de Dados"
                subtitle="Aqui você gerencia a sincronização de dados legados."
            />
    
            <PageContainer>
                <Box 
                    fill
                    fitContent
                >
                    <h2>Nova Sincronização</h2>

                    <SyncForm />
                </Box>

                <h2>Sincronizações</h2>

                <SyncList />
            </PageContainer>
        </>
    );
}