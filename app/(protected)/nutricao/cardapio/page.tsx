import PageTitle from "@/app/ui/PageTitle";
import PageContainer from "@/app/ui/PageContainer";
import Flexbox from "@/app/ui/Flexbox";
import { getFoodMenuProducts } from "@/app/data-access/foodMenuProduct";
import FoodMenuTable from "./components/FoodMenuTable";
import { getFoodMenuProduct } from "@/app/data-access/foodMenuProduct";
import FoodMenuForm from "./components/FoodMenuForm";
import Link from "next/link";
import { Button } from "@/app/ui/Button";
import Image from "next/image";
import menuBookScreenIcon from "@/public/icons/menu_book_screen.svg"

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

                    <Link href="/nutricao/cardapio/visualizacao" target="_blank">
                        <Button>
                            <Image
                                alt="Modo de visualização do cardápio"
                                src={ menuBookScreenIcon }
                            />

                            Visualização
                        </Button>
                    </Link>
                </Flexbox>

                <FoodMenuTable foodMenuProducts={ foodMenuProducts }/>
            </PageContainer>
        </>
    );
}