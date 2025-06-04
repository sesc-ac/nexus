import { getProduct } from "@/app/data-access/product";

export default async function Page({
    params
}: {
    params: Promise<{ productId: string }>
}){
    console.log('[PRODUCT ID] PAGE');

    const { productId } = await params;

    const product = await getProduct(productId);

    return (
        <>
            <h2>{ product?.description }</h2>
        </>
    );
}