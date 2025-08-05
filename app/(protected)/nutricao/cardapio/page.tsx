import PageTitle from "@/app/ui/PageTitle";
import PageContainer from "@/app/ui/PageContainer";
import Flexbox from "@/app/ui/Flexbox";
import { getFoodMenuProducts } from "@/app/data-access/foodMenuProduct";
import FoodMenuDialog from "./components/FoodMenuDialog";
import FoodMenuTable from "./components/FoodMenuTable";
import { getFoodMenuProduct } from "@/app/data-access/foodMenuProduct";
import FoodMenuForm from "./components/FoodMenuForm";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    console.log('📄 PAGE - CARDÁPIO DIGITAL');

    const { productId } = await searchParams;
    const product = productId ? await getFoodMenuProduct(productId as string) : null;

    const foodMenuProducts = await getFoodMenuProducts();

    return (
        <>
            <PageTitle
                title="Cardápio Digital"
                subtitle="Gerenciamento e exibição dos produtos a venda."
            />
    
            <PageContainer>
                <FoodMenuForm product={ product }/>

                <Flexbox spaceBetween>
                    <h2>Produtos ({ foodMenuProducts.length })</h2>

                    <FoodMenuDialog foodMenuProductsJSON={ JSON.stringify(foodMenuProducts) } />
                </Flexbox>

                <FoodMenuTable foodMenuProducts={ foodMenuProducts }/>
            </PageContainer>
        </>
    );
}