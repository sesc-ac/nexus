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
                    <label htmlFor="cpf">CPF</label>

                    <Input
                        fillWidth
                        id="cpf"
                        maxLength={ 11 }
                        minLength={ 11 }
                        name="cpf"
                        // placeholder="000.000.000-00"
                        required
                        type="text"
                    />

                    {state?.userNotFound ? <p className="sm clr-text-light"><b>{ state.userNotFound }</b></p> : null}
                </Flexbox>

                <Flexbox column fillWidth>
                    <label htmlFor="password">Senha</label>
                    
                    <Input
                        fillWidth
                        id="password"
                        maxLength={ 20 }
                        minLength={ 3 }
                        name="password"
                        // placeholder="*********" 
                        required
                        type="password" 
                    />

                    {state?.invalidPassword ? <p className="sm clr-text-light"><b>{ state.invalidPassword }</b></p> : null}
                </Flexbox>

                <Button fillWidth type="submit">Entrar</Button>
            </Flexbox>
        </Form>
    );
}