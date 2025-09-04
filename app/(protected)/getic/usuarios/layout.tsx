import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌱 LAYOUT - CUPONS');
  
  return (
    <>
      <PageTitle
          title="Usuários"
          subtitle="Gerenciamento de Usuários e Permissões."
      />

      <PageContainer>
        { children }  
      </PageContainer>
    </>
  );
}
