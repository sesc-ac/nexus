import { getProduct } from "@/app/data-access/product";
import Box from "@/app/ui/Box";
import { Button } from "@/app/ui/Button";
import Flexbox from "@/app/ui/Flexbox";
import { Input } from "@/app/ui/Input";
import Form from "next/form";
import { updateProductAction } from "./actions";

export default async function Page({
    params
}: {
    params: Promise<{ productId: string }>
}){
    console.log('📄 PAGE - [PRODUCT ID]');

    const { productId } = await params;

    const product = await getProduct(productId);

    return (
        <>
            <Flexbox column>
                <h2>{ product?.description }</h2>

                <p><b>Base de origem: </b>{ product?.legacyOriginDatabase }</p>
                <p><b>Identificador: </b>{ product?.legacyId }</p>
                <p><b>Tipo de unidade: </b>{ product?.unit }</p>
            </Flexbox>

            <Box fill>
                <Form action={ updateProductAction }>
                    <Input
                        defaultValue={ product?.id }
                        name="productId"
                        type="hidden"
                    />

                    <Flexbox column gapLg>
                        <Flexbox fillWidth>
                            <Flexbox column fillWidth>
                                <label htmlFor="ncm">NCM</label>

                                <Input 
                                    defaultValue={ product?.ncm as string }
                                    fillWidth
                                    id="ncm"
                                    min="0"
                                    name="ncm"
                                    type="number"
                                />
                            </Flexbox>

                            <Flexbox column fillWidth>
                                <label htmlFor="cfop">CFOP</label>

                                <Input 
                                    defaultValue={ product?.cfop as string }
                                    fillWidth
                                    id="cfop"
                                    min="0"
                                    name="cfop"
                                    type="number"
                                />
                            </Flexbox>

                            <Flexbox column fillWidth>
                                <label htmlFor="cofinsCST">COFINS - CST</label>

                                <Input 
                                    defaultValue={ product?.cofinsCST as string }
                                    fillWidth
                                    id="cofinsCST"
                                    min="0"
                                    name="cofinsCST"
                                    type="number"
                                />
                            </Flexbox>
                        </Flexbox>

                        <Flexbox fillWidth>
                            <Flexbox column fillWidth>
                                <label htmlFor="pisCST">PIS - CST</label>

                                <Input 
                                    defaultValue={ product?.pisCST as string }
                                    fillWidth
                                    id="pisCST"
                                    min="0"
                                    name="pisCST"
                                    type="number"
                                />
                            </Flexbox>
                        
                            <Flexbox column fillWidth>
                                <label htmlFor="icmsCST">ICMS - CST</label>

                                <Input 
                                    defaultValue={ product?.icmsCST as string }
                                    fillWidth
                                    id="icmsCST"
                                    min="0"
                                    name="icmsCST"
                                    type="number"
                                />
                            </Flexbox>

                            <Flexbox column fillWidth>
                                <label htmlFor="icmsCSOSN">ICMS - CSOSN</label>

                                <Input 
                                    defaultValue={ product?.icmsCSOSN as string }
                                    fillWidth
                                    id="icmsCSOSN"
                                    min="0"
                                    name="icmsCSOSN"
                                    type="number"
                                />
                            </Flexbox>
                        </Flexbox>

                        <Button>Salvar alterações</Button>
                    </Flexbox>
                </Form>
            </Box>

            <p className="sm clr-text-light"><b>Última atualização: </b>{ product?.updatedAt.toLocaleString() }</p>
        </>
    );
}