import Form from "next/form";
import { Button } from "@/app/_ui/Button";
import Input from "@/app/_ui/Input";
import Flexbox from "@/app/_ui/Flexbox";
import Link from "next/link";

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
        >
            <Flexbox column>
                <label htmlFor="initialDate">Período</label>

                <Flexbox>
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
                </Flexbox>

                {/* <a href="/gecon/cupons">Limpar</a> */}
            </Flexbox>
        </Form>
    );
}