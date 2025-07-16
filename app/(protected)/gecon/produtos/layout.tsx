import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌱 LAYOUT - PRODUTOS');

  return (
    <>
      <PageTitle 
          title="Produtos"
          subtitle="Gerenciamento dos produtos vendidos nos PDVs"
      />

      <PageContainer>
        { children }  
      </PageContainer>
    </>
  );
}
