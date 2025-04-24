import Form from "next/form";
import scheduleIcon from '@/public/icons/schedule.svg';
import calendarIcon from '@/public/icons/calendar_month.svg';
import personIcon from "@/public/icons/person.svg";
import Image from "next/image";
import PageTitle from "@/app/_ui/PageTitle";
import PageContainer from "@/app/_ui/PageContainer";
import Box from "@/app/_ui/Box";
import Flexbox from "@/app/_ui/Flexbox";
import Input from "@/app/_ui/Input";
import { Button } from "@/app/_ui/Button";
import Badge from "@/app/_ui/Badge";
import Divider from "@/app/_ui/Divider";

export default async function Page(){
    return (
        <>
            <PageTitle
                title="Sincronização de Dados"
                subtitle="Aqui você gerencia a sincronização de dados legados."
            />
    
            <PageContainer>
                <Box fill>
                    <h2>Nova Sincronização</h2>

                    <Form action='/'>
                        <Flexbox column>
                            <label htmlFor="initialDate">Período</label>
            
                            <Flexbox>
                                <Input 
                                    // defaultValue={ initialDate }
                                    id="initialDate"
                                    max={ new Date().toISOString().split('T')[0] }
                                    name='initialDate' 
                                    required
                                    type="date"
                                />
            
                                <Input 
                                    // defaultValue={ finalDate }
                                    id="finalDate"
                                    max={ new Date().toISOString().split('T')[0] }
                                    name='finalDate' 
                                    required
                                    type="date" 
                                />
            
                                <Button>Iniciar Sincronização</Button>
                            </Flexbox>
                
                        </Flexbox>
                    </Form> 
                </Box>

                <h2>Sincronizações</h2>

                <ul>
                    <li>
                        <Box>
                            <Badge>Sucesso</Badge>

                            <Flexbox>
                                <Image 
                                    alt="Usuário" 
                                    src={ personIcon }
                                />

                                <p><b>Érick Fernandes do Nascimento</b></p>
                            </Flexbox>

                            <p className="clr-text-light sm"><b>63 registros sincronizados</b></p>

                            <Divider/>

                            <Flexbox gapLg>
                                <Flexbox>
                                    <Image
                                        alt="Data da Sincronização"
                                        // className={ styles.cashier__infoItemIcon }
                                        src={ calendarIcon }
                                    />

                                    <p className='clr-text-light sm'><b>30/03/1999</b></p>
                                </Flexbox>

                                <Flexbox>
                                    <Image
                                        alt="Horário da Sincronização"
                                        // className={ styles.cashier__infoItemIcon }
                                        src={ scheduleIcon }
                                    />

                                    <p className='clr-text-light sm'><b>20:00</b></p>
                                </Flexbox>
                            </Flexbox>
                        </Box>
                    </li>
                </ul>
            </PageContainer>
        </>
    );
}