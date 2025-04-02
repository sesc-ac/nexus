import { Decimal } from "@prisma/client/runtime/library";

export function valueToCurrency(value: Decimal | number): string{
    return value ? Intl.NumberFormat('pt-br', {
        currency: "BRL",
        style: 'currency'
    }).format(value.toString() as Intl.StringNumericLiteral) : 'R$ 0,00';
}

export function dateToString(date: Date): string{
    return date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
}