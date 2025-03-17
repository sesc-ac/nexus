'use client'

import { Button } from "@/app/ui/Button";
import styles from './CashierDateRangeSearch.module.css';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Input from "@/app/ui/Input";

export default function CashierDateRangeSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const initialDateInput = event.currentTarget.elements.namedItem('initialDate') as HTMLInputElement;
        const finalDateInput = event.currentTarget.elements.namedItem('finalDate') as HTMLInputElement;

        const initialDate = initialDateInput.value;
        const finalDate = finalDateInput.value;

        const params = new URLSearchParams(searchParams);
        params.set('initialDate', initialDate);
        params.set('finalDate', finalDate);

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <form 
            className={ styles.dateRangeGroup }
            onSubmit={ handleSubmit }
        >
            <label className={ styles.label }>Período</label>

            <div className={ styles.group }>
                <Input 
                    defaultValue={ new Date().toISOString().split('T')[0] }
                    max={ new Date().toISOString().split('T')[0] }
                    name='initialDate' 
                    required
                    type="date"
                />

                <Input 
                    defaultValue={ new Date().toISOString().split('T')[0] }
                    max={ new Date().toISOString().split('T')[0] }
                    name='finalDate' 
                    type="date" 
                />

                <Button>Pesquisar</Button>
            </div>
        </form>
    );
}