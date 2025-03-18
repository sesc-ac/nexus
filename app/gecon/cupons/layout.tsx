import PageContainer from "@/app/_ui/PageContainer";
import PageTitle from "@/app/_ui/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageTitle
          title="Cupons Fiscais"
          subtitle="Aqui você gerencia os cupons fiscais das movimentações dos PDVs."
      />

      <PageContainer>
        {children}  
      </PageContainer>
    </>
  );
}
