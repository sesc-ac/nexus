'use client'

import { Button } from "@/app/ui/Button";
import { Input } from "@/app/ui/Input";
import Form from "next/form";
import { useActionState } from "react";
import Flexbox from "@/app/ui/Flexbox";
import Box from "@/app/ui/Box";
import { createUserAction } from "../../actions";

export function UserForm(){
    const [state, action, isPending] = useActionState(createUserAction, null);

    return (
        <Box 
           fill 
        >
            <Form action={ action }>
                <Flexbox column gapLg>
                    <Flexbox column fillWidth>
                        <label htmlFor="name">Nome</label>

                        <Input
                            defaultValue="Erick"
                            fillWidth
                            id="name"
                            maxLength={ 100 }
                            minLength={ 3 }
                            name="name"
                            placeholder="Ex: Érick Fernandes do Nascimento"
                            required
                            type="text"
                        />
                    </Flexbox>

                    <Flexbox column fillWidth>
                        <label htmlFor="cpf">CPF</label>

                        <Input
                            defaultValue="998.840.972-91"
                            fillWidth
                            id="cpf"
                            maxLength={ 11 }
                            minLength={ 11 }
                            name="cpf"
                            placeholder="Ex: 000.000.000-00"
                            required
                            type="text"
                        />
                    </Flexbox>

                    <Flexbox column fillWidth>
                        <label htmlFor="password">Senha</label>
                        
                        <Input
                            defaultValue="123456"
                            fillWidth
                            id="password"
                            maxLength={ 20 }
                            minLength={ 3 }
                            name="password"
                            placeholder="*********" 
                            required
                            type="password" 
                        />
                    </Flexbox>

                    <Button
                        disabled={ isPending }
                        type="submit"
                    >
                        { isPending ? 'Salvando Usuário...' : 'Salvar' }
                    </Button>
                </Flexbox>
            </Form>
        </Box>
    );
}