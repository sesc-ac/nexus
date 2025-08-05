import Form from "next/form";
import { Button } from "@/app/ui/Button";
import { Input } from "@/app/ui/Input";
import Flexbox from "@/app/ui/Flexbox";
import Box from "@/app/ui/Box";

type DateRangeFormProps = {
    initialDate: string,
    finalDate: string,
}

export default function DateRangeForm({
    initialDate,
    finalDate
}: DateRangeFormProps){
    console.log('🧩 COMPONENT - DATE RANGE FORM');
    return (
        <Box 
            fill
            fitContent
        >
            <Form 
                action="/gecon/cupons"
            >
                <Flexbox column>
                    <label htmlFor="initialDate">Selecione um período</label>

                    <Flexbox>
                        <Input 
                            defaultValue={ initialDate }
                            id="initialDate"
                            max={ new Date().toISOString().split('T')[0] }
                            min="2025-01-01"
                            name="initialDate" 
                            required
                            type="date"
                        />

                        <Input 
                            defaultValue={ finalDate }
                            id="finalDate"
                            max={ new Date().toISOString().split('T')[0] }
                            min="2025-01-01"
                            name="finalDate" 
                            required
                            type="date" 
                        />

                        <Button>Buscar Vendas</Button>
                    </Flexbox>
                </Flexbox>
            </Form>
        </Box>
    );
}