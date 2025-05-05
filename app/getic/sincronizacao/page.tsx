import scheduleIcon from '@/public/icons/schedule.svg';
import calendarIcon from '@/public/icons/calendar_month.svg';
import personIcon from "@/public/icons/person.svg";
import Image from "next/image";
import PageTitle from "@/app/_ui/PageTitle";
import PageContainer from "@/app/_ui/PageContainer";
import Box from "@/app/_ui/Box";
import Flexbox from "@/app/_ui/Flexbox";
import Badge from "@/app/_ui/Badge";
import Divider from "@/app/_ui/Divider";
import prisma from "@/app/db";
import { dateToString } from "@/app/_utils/dataFormat";
import SyncForm from "./components/SyncForm";

export default async function Page(){
    const synchronizations = await prisma.synchronization.findMany();

    return (
        <>
            <PageTitle
                title="Sincronização de Dados"
                subtitle="Aqui você gerencia a sincronização de dados legados."
            />
    
            <PageContainer>
                <Box fill>
                    <h2>Nova Sincronização</h2>

                    <SyncForm />
                </Box>

                <h2>Sincronizações</h2>

                <ul>
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
            </PageContainer>
        </>
    );
}