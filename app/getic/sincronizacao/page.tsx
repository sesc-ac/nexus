import PageTitle from "@/app/_ui/PageTitle";
import PageContainer from "@/app/_ui/PageContainer";
import Box from "@/app/_ui/Box";
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