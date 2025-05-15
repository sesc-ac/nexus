import Badge from "@/app/ui/Badge";
import Box from "@/app/ui/Box";
import Divider from "@/app/ui/Divider";
import Flexbox from "@/app/ui/Flexbox";
import { getSynchronizations } from "@/app/data-access/synchronization";
import Image from "next/image";
import scheduleIcon from '@/public/icons/schedule.svg';
import calendarIcon from '@/public/icons/calendar_month.svg';
import personIcon from "@/public/icons/person.svg";
import { dateToString } from "@/app/_utils/dataFormat";
import styles from './SyncList.module.css';

export default async function SyncList(){
    const synchronizations = await getSynchronizations();

    return (
        <ul className={ styles.syncList }>
            {synchronizations.map((synchronization) => (
                <li key={ synchronization.id }>
                    <Box>
                        <Badge>{ synchronization.status }</Badge>

                        <Flexbox>
                            <Image 
                                alt="Usuário" 
                                src={ personIcon }
                            />

                            <p><b>{ synchronization.user }</b></p>
                        </Flexbox>

                        <p className="clr-text-light sm"><b>{ synchronization.updatedData } registros processados</b></p>
                        <p className="clr-text-light sm"><b>{ synchronization.createdData } registros criados</b></p>

                        <Divider/>

                        <Flexbox gapLg>
                            <Flexbox>
                                <Image
                                    alt="Data da Sincronização"
                                    src={ calendarIcon }
                                />

                                <p className='clr-text-light sm'><b>{ dateToString(synchronization.createdAt) }</b></p>
                            </Flexbox>

                            <Flexbox>
                                <Image
                                    alt="Horário da Sincronização"
                                    src={ scheduleIcon }
                                />

                                <p className='clr-text-light sm'><b>{ synchronization.createdAt.toLocaleTimeString() }</b></p>
                            </Flexbox>
                        </Flexbox>
                    </Box>
                </li>
            ))}
        </ul>
    );
}