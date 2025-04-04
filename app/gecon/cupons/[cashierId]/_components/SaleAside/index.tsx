import Badge from "@/app/_ui/Badge";
import { Button } from "@/app/_ui/Button";
import Flexbox from "@/app/_ui/Flexbox";
import './SaleAside.css';
import IconButton from "@/app/_ui/IconButton";
import SaleItem from "./SaleItem";
import receiptIcon from '@/public/icons/receipt.svg';
import Image from "next/image";

export default function SaleAside() {
    return (
        <aside className="saleAside open">
            <IconButton 
                icon="closePanel"
                size="lg"
            />

            <Badge>
                <Image 
                    alt='Situação do Cupom Fiscal'
                    src={ receiptIcon }
                />

                Pendente
            </Badge>

            <Flexbox column>
                <p><b>Cliente:</b> Érick Fernandes do Nasicmento</p>
                <p><b>CPF:</b> 998.***.***-91</p>
                <p><b>Categoria:</b> Comerciário</p>
                <p><b>E-mail:</b> email@example.com</p>
            </Flexbox>

            <h2>Itens</h2>

            <ul>
                <SaleItem />
                <SaleItem />
                <SaleItem />
            </ul>

            <Button fill>Emitir Cupom</Button>
            <Button fill variant="download">Baixar Cupom</Button>
        </aside>
    );
}