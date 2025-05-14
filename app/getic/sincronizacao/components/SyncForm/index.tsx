'use client';

import { useActionState } from "react";
import { initSynchronization } from "../../actions";
import Form from "next/form";
import Flexbox from "@/app/_ui/Flexbox";
import Input from "@/app/_ui/Input";
import { Button } from "@/app/_ui/Button";

export default function SyncForm(){
    const [state, action, isPending] = useActionState(initSynchronization, null);
    
    return (
        <Form action={ action }>
            <Flexbox column>
                <label htmlFor="initialDate">Período</label>

                <Flexbox>
                    <Input 
                        defaultValue={ new Date().toISOString().split('T')[0] }
                        id="initialDate"
                        max={ new Date().toISOString().split('T')[0] }
                        min="2025-01-01"
                        name='initialDate' 
                        required
                        type="date"
                    />

                    <Input 
                        defaultValue={ new Date().toISOString().split('T')[0] }
                        id="finalDate"
                        max={ new Date().toISOString().split('T')[0] }
                        min="2025-01-01"
                        name='finalDate' 
                        required
                        type="date" 
                    />

                    <Button disabled={ isPending }>
                        { isPending ? 'Sincronizando dados legados...' : 'Iniciar Sincronização' }
                    </Button>
                </Flexbox>
    
            </Flexbox>
        </Form> 
    );
}