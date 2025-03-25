import Flexbox from "@/app/_ui/Flexbox";
import RadioInput from "@/app/_ui/RadioInput";

export default function CashierStatusFilter(){
    return(
        <Flexbox column>
            <label htmlFor="cashiersFilter">Filtros</label>

            <Flexbox>
                <RadioInput
                    defaultChecked
                    id="cashiersFilter"
                    labelText="Todos"
                    name="cashiersFilter"
                />

                <RadioInput
                    id="cashiersFilterOpen"
                    labelText="Abertos"
                    name="cashiersFilter"
                />

                <RadioInput
                    id="cashiersFilterClose"
                    labelText="Fechados"
                    name="cashiersFilter"
                />
            </Flexbox>
        </Flexbox>
    );
}