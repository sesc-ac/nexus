import prisma from "@/app/db";
import Box from "@/app/ui/Box";
import PageContainer from "@/app/ui/PageContainer";
import PageTitle from "@/app/ui/PageTitle";
import { Product } from "@prisma/client";
import { Fragment } from "react";
import styles from "./page.module.css";
import Flexbox from "@/app/ui/Flexbox";

export default async function Page(){
    const products = await prisma.product.findMany({
        orderBy: {
            description: 'asc'
        }
    });

    return (
        <>
            <PageTitle 
                title="Produtos"
                subtitle="Aqui você gerencia os produtos"
            />

            <PageContainer>
                <h2>Lista de Produtos</h2>

                <ul className={ styles.productList }>    
                    {products.map((product: Product) => (
                        <Fragment key={ product.id }>
                            <li>
                                <Box>
                                    <p>{ product.description }</p>

                                    <Flexbox column gapSm>
                                        <Box paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">COFINS</p>
                                                <p className="">51%</p>
                                            </Flexbox>
                                        </Box>

                                        <Box paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">ICMS</p>
                                                <p className="">51%</p>
                                            </Flexbox>
                                        </Box>

                                        <Box paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">IPI</p>
                                                <p className="">51%</p>
                                            </Flexbox>
                                        </Box>

                                        <Box paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">PIS</p>
                                                <p className="">51%</p>
                                            </Flexbox>
                                        </Box>
                                    </Flexbox>
                                </Box>
                            </li>
                        </Fragment>
                    ))}
                </ul>
            </PageContainer>
        </>
    );
}