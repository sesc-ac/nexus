'use client'

import logoutAction from "@/app/actions";
import Form from "next/form";
import { useRef } from "react";
import styles from './LogoutWrapper.module.css';

export default function LogoutWrapper({ children }: { children: React.ReactNode }){
    const formRef = useRef<HTMLFormElement>(null);
    
    return (
        <Form 
            action={ logoutAction }
            className={ styles.form }
            onClick={() => formRef.current?.requestSubmit()}
            ref={ formRef }
        >
            { children }
        </Form>
    );
}