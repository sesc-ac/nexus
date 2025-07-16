import Badge from "@/app/ui/Badge";
import Flexbox from "@/app/ui/Flexbox";
import Image from "next/image";
import receiptIcon from '@/public/icons/receipt.svg';
import { Button } from "@/app/ui/Button";
import { getSale, SaleWithRelations } from "@/app/data-access/sale";
import { dateToString } from "@/app/utils/dataFormat";
import scheduleIcon from '@/public/icons/schedule.svg';
import calendarIcon from '@/public/icons/calendar_month.svg';
import Box from "@/app/ui/Box";
import Aside from "@/app/ui/Aside";
import SaleList from "./components/SaleList";
import EmitSaleForm from "./components/SaleList/EmitSaleForm";

export default async function Page({
    params
}: {
    params: Promise<{ saleId: string }>
}){
    console.log('📄 PAGE - [SALE ID]');

    const { saleId } = await params;

    const sale = await getSale(saleId);

    return (
        <>
            <Flexbox column>
                <Flexbox>
                    <h2>Venda #{ sale?.legacyId }</h2>

                    <Badge>
                        <Image 
                            alt='Situação do Cupom Fiscal'
                            src={ receiptIcon }
                            />

                        <p className="">{ sale?.NFCEStatus }</p>
                    </Badge>
                </Flexbox>

                <Flexbox gapLg>
                    <Flexbox>
                        <Image
                            alt="Data da Venda"
                            src={ calendarIcon }
                        />

                        <p className='clr-text-light sm'><b>{ dateToString(sale?.date as Date) }</b></p>
                    </Flexbox>

                    <Flexbox>
                        <Image
                            alt="Horário da Venda"
                            src={ scheduleIcon }
                        />

                        <p className='clr-text-light sm'><b>{ sale?.time }</b></p>
                    </Flexbox>
                </Flexbox>
            </Flexbox>

            <Box fill gapSm>
                {sale?.customer ? 
                    <>
                        <h2>Cliente</h2>

                        <p><b>{ sale?.customer?.name } - { sale?.customer?.category.name }</b></p>
                        <p>email@exemplo.com</p> 
                    </>
                :
                    <h2>VENDA AVULSA</h2>
                }
                
            </Box>

            <Box fill gapSm>
                <h2>Caixa #{ sale?.cashier.legacyId }</h2>

                <p><b>Operador: </b>{ sale?.cashier.operator.name }</p>
                <p><b>Forma de Pagamento: </b>{ sale?.paymentMethod ? sale?.paymentMethod?.name : 'Não Informado' }</p>
                <p><b>Unidade: </b>{ sale?.cashier.salePlace.unit.name }</p>
                <p><b>Local de Venda: </b>{ sale?.cashier.salePlace.name }</p>
            </Box>

            <Aside>
                <h2>Itens</h2>
                <SaleList sale={ sale as SaleWithRelations }/>
                <EmitSaleForm saleId={ sale?.id as string } />
            </Aside>
        </>
    );
}