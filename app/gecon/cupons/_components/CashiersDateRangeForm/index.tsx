import Form from "next/form";
import { Button } from "@/app/_ui/Button";
import styles from './CashiersDateRangeForm.module.css';
import Input from "@/app/_ui/Input";

type CashiersDateRangeFormProps = {
    initialDate: string,
    finalDate: string,
}

export default function CashiersDateRangeForm({
    initialDate,
    finalDate
}: CashiersDateRangeFormProps){
    return (
        <Form 
            action="/gecon/cupons"
            className={ styles.dateRangeGroup }
        >
            <label htmlFor="initialDate" className={ styles.label }>Período</label>

            <div className={ styles.group }>
                <Input 
                    defaultValue={ initialDate }
                    id="initialDate"
                    max={ new Date().toISOString().split('T')[0] }
                    name='initialDate' 
                    required
                    type="date"
                />

                <Input 
                    defaultValue={ finalDate }
                    id="finalDate"
                    max={ new Date().toISOString().split('T')[0] }
                    name='finalDate' 
                    required
                    type="date" 
                />

                <Button>Pesquisar</Button>
            </div>
        </Form>
    );
}