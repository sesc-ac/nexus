import Badge from "@/app/_ui/Badge";
import { Button } from "@/app/_ui/Button";
import Flexbox from "@/app/_ui/Flexbox";
import './SaleAside.css';
import { valueToCurrency } from "@/app/_utils/dataFormat";

export default function SaleAside() {
    return (
        <aside className="saleAside open">
            <button>x</button>

            <Flexbox>
                <h2>Venda #345</h2>

                <Badge>Pendente</Badge>
            </Flexbox>

            <Flexbox column>
                <p><b>Cliente:</b> Érick Fernandes do Nasicmento</p>
                <p><b>CPF:</b> 998.***.***-91</p>
                <p><b>Categoria:</b> Comerciário</p>
                <p><b>E-mail:</b> email@example.com</p>
            </Flexbox>

            <h2>Itens</h2>

            <ul>
                <li>
                    <p>Item 1</p>
                    <p>{ valueToCurrency(2.5) }</p>
                </li>
                
                <li>
                    <p>Item 1</p>
                    <p>{ valueToCurrency(2.5) }</p>
                </li>
            </ul>

            <Button fill>Emitir Cupom</Button>
        </aside>
    );
}