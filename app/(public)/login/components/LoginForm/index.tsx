'use client'

import { Button } from "@/app/ui/Button";
import { Input } from "@/app/ui/Input";
import Form from "next/form";
import { useActionState } from "react";
import { loginAction } from "../../actions";
import Flexbox from "@/app/ui/Flexbox";
import Link from "next/link";
import styles from './LoginForm.module.css';

export function LoginForm(){
    const [state, action, isPending] = useActionState(loginAction, null);

    return (
        <Form 
            action={ action } 
            className={ styles.loginForm }
        >
            <Flexbox column gapLg>
                <Flexbox column fillWidth>
                    <label htmlFor="user">Usuário</label>

                    <Input
                        fillWidth
                        id="user"
                        maxLength={ 20 }
                        minLength={ 3 }
                        name="user" 
                        required
                        type="text"
                    />
                </Flexbox>

                <Flexbox column fillWidth>
                    <label htmlFor="password">Senha</label>
                    
                    <Input
                        fillWidth
                        id="password"
                        maxLength={ 20 }
                        minLength={ 3 }
                        name="password" 
                        required
                        type="password" 
                    />
                </Flexbox>

                <Flexbox fillWidth>
                    <Button fillWidth type="submit">Entrar</Button>

                    <Link href="/">
                        <Button secondary>Voltar</Button>
                    </Link>
                </Flexbox>
            </Flexbox>

        </Form>
    );
}