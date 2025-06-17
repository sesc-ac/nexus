import locationIcon from '@/public/icons/location_on.svg';
import domainIcon from '@/public/icons/domain.svg';
import scheduleIcon from '@/public/icons/schedule.svg';
import personIcon from '@/public/icons/person.svg';
import calendarIcon from '@/public/icons/calendar_month.svg';
import { dateToString, valueToCurrency } from '@/app/utils/dataFormat';
import Badge from "@/app/ui/Badge";
import Box from "@/app/ui/Box";
import Flexbox from "@/app/ui/Flexbox";
import Link from 'next/link';
import Divider from '@/app/ui/Divider';
import Image from 'next/image';
import styles from './SalesItem.module.css';
import receiptIcon from '@/public/icons/receipt.svg';
import { SaleWithRelations } from '@/app/data-access/sale';

export default function SalesListItem({
    sale
}: {
    sale: SaleWithRelations
}){
    return(
        <li className={ styles.saleItem }>
            <Link href={ `/gecon/cupons/${sale.id}` }>
                <Box>
                    <Flexbox spaceBetween>
                        <Flexbox gapLg>
                            <Badge><p className=''>#{ sale.legacyId }</p></Badge>

                            <Badge>
                                <Image 
                                    alt='Situação do Cupom Fiscal'
                                    src={ receiptIcon }
                                />

                                <p className=''>{ sale.NFCEStatus }</p>
                            </Badge>

                            <p className='sm'><b>{ sale.customer?.name || 'VENDA AVULSA' }</b></p>

                            {sale.customer && <p className='sm clr-text-light'><b>{ sale.customer?.category.name }</b></p>}
                        </Flexbox>

                        <Flexbox gapLg>
                            {sale.paymentMethod && <Badge key={ sale.paymentMethod.id }>{ sale.paymentMethod.name }</Badge> }

                            <Badge>{ valueToCurrency(sale.value) }</Badge>
                        </Flexbox>
                    </Flexbox>

                    <Divider />

                    <Flexbox gapLg>
                        <Flexbox>
                            <Image
                                alt="Operador"
                                src={ personIcon }
                            />

                            <p className='clr-text-light sm'><b>{ sale.cashier.operator.name }</b></p>
                        </Flexbox>

                        <Flexbox>
                            <Image
                                alt="Data da Venda"
                                src={ calendarIcon }
                            />

                            <p className='clr-text-light sm'><b>{ dateToString(sale.date) }</b></p>
                        </Flexbox>

                        <Flexbox>
                            <Image
                                alt="Horário da Venda"
                                src={ scheduleIcon }
                            />

                            <p className='clr-text-light sm'><b>{ sale.time }</b></p>
                        </Flexbox>

                        <Flexbox>
                            <Image
                                alt="Unidade"
                                src={ locationIcon }
                            />

                            <p className='clr-text-light sm'><b>{ sale.cashier.salePlace.unit.name }</b></p>
                        </Flexbox>

                        <Flexbox>
                            <Image
                                alt="Local da Venda"
                                src={ domainIcon }
                            />

                            <p className='clr-text-light sm'><b>{ sale.cashier.salePlace.name }</b></p>
                        </Flexbox>
                    </Flexbox>
                </Box>
            </Link>
        </li>
    );
}