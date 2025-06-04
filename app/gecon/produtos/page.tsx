import Box from "@/app/ui/Box";
import { Product } from "@prisma/client";
import styles from "./page.module.css";
import Flexbox from "@/app/ui/Flexbox";
import Link from "next/link";
import { getProducts } from "@/app/data-access/product";

export default async function Page(){
    console.log('PRODUTOS PAGE');

    const products = await getProducts();

    return (
        <>
            <h2>Lista de Produtos</h2>

            <ul className={ styles.productList }>    
                {products.map((product: Product) => (
                    <li key={ product.id }>
                        <Link href={ `/gecon/produtos/${product.id}` }>
                            <Box>
                                <p>{ product.description }</p>

                                <Flexbox gapSm>
                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">COFINS</p>
                                            <p className="">51%</p>
                                        </Flexbox>
                                    </Box>

                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">ICMS</p>
                                            <p className="">51%</p>
                                        </Flexbox>
                                    </Box>

                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">IPI</p>
                                            <p className="">51%</p>
                                        </Flexbox>
                                    </Box>

                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">PIS</p>
                                            <p className="">51%</p>
                                        </Flexbox>
                                    </Box>
                                </Flexbox>
                            </Box>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}