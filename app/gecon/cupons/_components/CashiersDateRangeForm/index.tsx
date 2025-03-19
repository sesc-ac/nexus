import Form from "next/form";
import { Button } from "@/app/_ui/Button";
import styles from './CashiersDateRangeForm.module.css';
import Input from "@/app/_ui/Input";

export default function CashiersDateRangeForm() {
    return (
        <Form 
            action="/gecon/cupons"
            className={ styles.dateRangeGroup }
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
        </Form>
    );
}