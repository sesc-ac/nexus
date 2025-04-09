// 'use client';

import Badge from "@/app/_ui/Badge";
import { Button } from "@/app/_ui/Button";
import Flexbox from "@/app/_ui/Flexbox";
import './SaleAside.css';
import SaleItem from "./SaleItem";
import receiptIcon from '@/public/icons/receipt.svg';
import Image from "next/image";
import { getSale, getSaleItems } from "@/app/_data-access/sale";
import { valueToCurrency } from "@/app/_utils/dataFormat";
import { Decimal } from "@prisma/client/runtime/library";


export default async function SaleAside({ 
    id
 }: {
    id: number
 }) {

    const sale = await getSale(id);
    const saleItems = await getSaleItems(id);


    return (
        <>
            <Flexbox>
                <h2>Venda #{ sale?.legacyId }</h2>

                <Badge>
                    <Image 
                        alt='Situação do Cupom Fiscal'
                        src={ receiptIcon }
                    />

                    Pendente
                </Badge>
            </Flexbox>

            <Flexbox column>
                { sale?.costumer ?
                    <>
                        <p><b>Cliente:</b> { sale?.costumer }</p>
                        <p><b>CPF:</b> { sale?.costumerCpf }</p>
                        <p><b>Categoria:</b> { sale?.costumerCategory }</p>
                    </>
                 :
                    <p className="clr-text-light"><b>VENDA AVULSA</b></p>
                }
            </Flexbox>

            <h2>Itens</h2>

            <ul className="saleItems">
                {saleItems.map((item) => (
                    <SaleItem 
                        key={ item.id }
                        product={ item.product }
                        productUnit={ item.productUnit }
                        quantity={ item.quantity }
                        value={ item.itemValue }
                    />
                ))}

                <li>
                    <b className="sm">TOTAL</b>
                    <b className="sm">{ valueToCurrency(sale?.value as Decimal) }</b>
                </li>
            </ul>

            <Button fill>Emitir Cupom</Button>
            <Button fill variant="download">Baixar Cupom</Button>
        </>
    );
}