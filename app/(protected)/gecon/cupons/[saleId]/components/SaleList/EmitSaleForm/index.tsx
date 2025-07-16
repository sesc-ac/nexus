import Form from "next/form";
import { emitSaleAction } from "../../../actions";
import { Button } from "@/app/ui/Button";

export default function EmitSaleForm({ saleId }: { saleId: string }){
    return (
        <Form action={ emitSaleAction }>
            <Button 
                fillWidth
                name="saleId"
                value={ saleId } 
            >
                    Emitir Cupom
            </Button>
        </Form>
    );
}