import Box from "@/app/ui/Box";
import Form from "next/form";
import { updateOrCreateFoodMenuProductAction } from "../../actions";
import Flexbox from "@/app/ui/Flexbox";
import { Input, Select } from "@/app/ui/Input";
import { Button } from "@/app/ui/Button";
import { FoodMenuProduct } from "@prisma/client";

export default function FoodMenuForm({
    product
}: {
    product: FoodMenuProduct | null
}){
    return (
        <Box fill>
            <h2>{product ? 'Editar Produto' : 'Adicionar Produto'}</h2>

            <Form action={ updateOrCreateFoodMenuProductAction }>
                {product ? <input type="hidden" name="productId" id="productId" defaultValue={ product.id } /> : null}

                <Flexbox column gapLg>
                    <Flexbox fillWidth>
                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="name">Nome do Produto</label>

                            <Input 
                                defaultValue={ product?.name }
                                fillWidth
                                id="name"
                                name="name"
                                min="4"
                                max="47"
                                required
                            />
                        </Flexbox>

                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="category">Categoria</label>

                            <Select
                                defaultValue={ product?.category }
                                fillWidth
                                id="category"
                                key={ product?.id }
                                name="category"
                                required
                            >
                                <option value="Lanches">Lanches</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Sobremesas">Sobremesas</option>
                            </Select>
                        </Flexbox>
                    </Flexbox>

                    <Flexbox 
                        column 
                        fillWidth
                    >
                        <label htmlFor="description">Descrição</label>

                        <Input 
                            defaultValue={ product?.description?.toString() }
                            fillWidth
                            id="description"
                            name="description"
                            min="4"
                            max="78"
                        />
                    </Flexbox>

                    <h2>Preços por Categoria</h2>

                    <Flexbox fillWidth>
                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="comerciarioPrice">Comerciário</label>

                            <Input 
                                defaultValue={ product?.comerciarioPrice.toString() }
                                fillWidth
                                id="comerciarioPrice"
                                name="comerciarioPrice"
                                required
                            />
                        </Flexbox>

                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="conveniadoPrice">Conveniado</label>

                            <Input 
                                defaultValue={ product?.conveniadoPrice.toString() }
                                fillWidth
                                id="conveniadoPrice"
                                name="conveniadoPrice"
                                required
                            />
                        </Flexbox>

                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="empresarioPrice">Empresário</label>

                            <Input 
                                defaultValue={ product?.empresarioPrice.toString() }
                                fillWidth
                                id="empresarioPrice"
                                name="empresarioPrice"
                                required
                            />
                        </Flexbox>

                        <Flexbox 
                            column 
                            fillWidth
                        >
                            <label htmlFor="publicoPrice">Público Geral</label>

                            <Input 
                                defaultValue={ product?.publicoPrice.toString() }
                                fillWidth
                                id="publicoPrice"
                                name="publicoPrice"
                                required
                            />
                        </Flexbox>
                    </Flexbox>

                    <Button>{product ? 'Salvar alterações' : 'Salvar Produto'}</Button>
                </Flexbox>
            </Form>
        </Box>
    );
}