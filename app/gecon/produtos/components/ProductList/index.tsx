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

                                <Flexbox column>
                                    <Flexbox fillWidth>
                                        <Box fill={ product.ncm ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">NCM</p>

                                                {product.ncm ?   
                                                        <p className="sm">{ product.ncm }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>

                                        <Box fill={ product.cfop ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">CFOP</p>

                                                {product.cfop ?   
                                                        <p className="sm">{ product.cfop }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>

                                        <Box fill={ product.cofinsCST ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">CONFINS - CST</p>

                                                {product.cofinsCST ?   
                                                        <p className="sm">{ product.cofinsCST }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>
                                    </Flexbox>

                                    <Flexbox fillWidth>
                                        <Box fill={ product.pisCST ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">PIS - CST</p>
                                                
                                                {product.pisCST ?   
                                                        <p className="sm">{ product.pisCST }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>

                                        <Box fill={ product.icmsCST ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">ICMS - CST</p>

                                                {product.icmsCST ?   
                                                        <p className="sm">{ product.icmsCST }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>

                                        <Box fill={ product.icmsCSOSN ? false : true } paddingSm>
                                            <Flexbox spaceBetween>
                                                <p className="sm">ICMS - CSOSN</p>

                                                {product.icmsCSOSN ?   
                                                        <p className="sm">{ product.icmsCSOSN }</p>
                                                    :
                                                        <Image
                                                            alt="Tarifa pendente de preenchimento"
                                                            src={ errorCircleIcon }
                                                            title="Tarifa pendente de preenchimento"
                                                        />
                                                }
                                            </Flexbox>
                                        </Box>
                                    </Flexbox>
                                </Flexbox>
                            </Box>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}