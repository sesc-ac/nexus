import Flexbox from "@/app/_ui/Flexbox";
import RadioInput from "@/app/_ui/RadioInput";

export default function CashierStatusFilter(){
    return(
        <Flexbox column>
            <label htmlFor="cashierFilter">Filtros</label>

            <Flexbox>
                <RadioInput
                    defaultChecked
                    id="cashierFilter"
                    labelText="Todos"
                    name="cashierFilter"
                />

                <RadioInput
                    id="cashierFilterOpen"
                    labelText="Abertos"
                    name="cashierFilter"
                />

                <RadioInput
                    id="cashierFilterClose"
                    labelText="Fechados"
                    name="cashierFilter"
                />
            </Flexbox>
        </Flexbox>
    );
}