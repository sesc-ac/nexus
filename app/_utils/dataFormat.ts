import { Decimal } from "@prisma/client/runtime/library";

export function valueToCurrency(value: Decimal): string{
    return Intl.NumberFormat('pt-br', {
        currency: "BRL",
        style: 'currency'
    }).format(value.toString() as Intl.StringNumericLiteral);
}

export function dateToString(date: Date): string{
    return date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
}