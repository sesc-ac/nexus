import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageTitle
          title="Cupons Fiscais"
          subtitle="Aqui você gerencia a emissão de cupons fiscais das movimentações dos PDVs."
      />

      <PageContainer>
        { children }  
      </PageContainer>
    </>
  );
}
