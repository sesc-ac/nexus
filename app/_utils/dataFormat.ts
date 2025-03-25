export function valueToCurrency(value: string): string{
    let valueNumber: number;

    if(!value)
        valueNumber = 0
    else 
        valueNumber = !isNaN(Number(value.replace(',', '.'))) ? Number.parseFloat(value.replace(',', '.')) : 0;

    return Intl.NumberFormat('pt-br', {
        style: "currency", 
        currency: "BRL"
    }).format(valueNumber);
}

export function dateToString(date: string): string{
    return new Date(date.replaceAll('-', '/')).toLocaleDateString();
}