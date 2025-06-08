import { getProducts } from "@/app/data-access/product";
import styles from "./ProductList.module.css";
import { Product } from "@prisma/client";
import Link from "next/link";
import Box from "@/app/ui/Box";
import Flexbox from "@/app/ui/Flexbox";
import Badge from "@/app/ui/Badge";
import Image from "next/image";
import checkCircleIcon from "@/public/icons/check_circle.svg";
import errorCircleIcon from "@/public/icons/error.svg";

export default async function ProductList(){
    const products = await getProducts();

    return (
        <>
            <h2>Lista de Produtos ({ products.length })</h2>

            <ul className={ styles.productList }>    
                {products.map((product: Product) => (
                    <li key={ product.id }>
                        <Link href={ `/gecon/produtos/${product.id}` }>
                            <Box>
                                <Flexbox>
                                    <Badge>{ product.legacyOriginDatabase }</Badge>
                                    <Badge>#{ product.legacyId }</Badge>
                                </Flexbox>

                                <p>{ product.description }</p>

                                <Flexbox gapSm>
                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">COFINS</p>

                                            <Image
                                                alt="Situação do COFINS do produto"
                                                src={ errorCircleIcon }
                                            />
                                        </Flexbox>
                                    </Box>

                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">ICMS</p>

                                            <Image
                                                alt="Situação do ICMS do produto"
                                                src={ errorCircleIcon }
                                            />
                                        </Flexbox>
                                    </Box>

                                    <Box fill paddingSm>
                                        <Flexbox spaceBetween>
                                            <p className="sm">PIS</p>

                                            <Image
                                                alt="Situação do PIS do produto"
                                                src={ errorCircleIcon }
                                            />
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