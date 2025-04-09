import { getSales } from "@/app/_data-access/cashier";
import Flexbox from "@/app/_ui/Flexbox";
import Badge from "@/app/_ui/Badge";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/app/_ui/IconButton";
import styles from './SalesList.module.css';
import scheduleIcon from '@/public/icons/schedule.svg';
import receiptIcon from '@/public/icons/receipt.svg';
import { valueToCurrency } from '@/app/_utils/dataFormat';

export default async function SalesList({
    cashierId,
}: {
    cashierId: number;
}){
    const sales = await getSales(cashierId);

    return(
        <ul>
            {sales.map((sale) => (
                <li className={ styles.saleItem } key={ sale.id }>
                    <Flexbox spaceBetween>
                        <Flexbox gapLg>
                            <Badge>#{ sale.legacyId }</Badge>
                            { sale.costumer ? 
                                <>
                                    <p className='sm'><b>{ sale.costumer }</b></p>
                                    <p className='clr-text-light sm'><b>{ sale.costumerCategory }</b></p>
                                </>
                             :
                                <p className='clr-text-light sm'><b>VENDA AVULSA</b></p>
                            }

                            <Flexbox>
                                <Image
                                    alt="Horário da venda"
                                    src={ scheduleIcon }
                                />

                                <p className='clr-text-light sm'><b>{ sale.time }</b></p>
                            </Flexbox>
                        </Flexbox>

                        <Flexbox>
                            <Badge>
                                <Image 
                                    alt='Situação do Cupom Fiscal'
                                    src={ receiptIcon }
                                />

                                Pendente
                            </Badge>

                            <Badge>{ valueToCurrency(sale.value) }</Badge>


                            <Link href={`/gecon/cupons/${cashierId}/venda/${sale.id}`} scroll={false}>
                                <IconButton icon='openPanel'/>
                            </Link>
                        </Flexbox>
                    </Flexbox>
                </li>
            ))}
        </ul>
    );
}