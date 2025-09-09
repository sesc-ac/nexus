import { SaleWithRelations } from "@/app/data-access/sale";
import { nfeSale } from "./types";

export function saleJSON(sale: SaleWithRelations): string{
    const nfeSale: nfeSale = {
        'id': sale.id,

        'operationType': 'Outgoing',
        'destination': 'Internal_Operation',
        'printType': 'NFeNormalPortrait',
        'purposeType': 'Normal',
        'consumerType': 'FinalConsumer',
        'presenceType': 'Presence',

        'buyer': sale.customer ? {
            'name': sale.customer.name,
            'type': 'Customer',
            'taxRegime': 'Isento'
        } : '',

        'items': sale.items ? sale.items.map((item, index) => { return { 
            'code': item.product.id,
            'description': item.product.description,
            'ncm': item.product.ncm,
            'cfop': '5100',
            'unit': item.product.unit,
            'quantity': item.quantity,
            'totalAmount': item.itemValue,
            'unitAmount': item.itemValue,

            'tax': {
                'icms': {
                    'cst': 40,
                    'origin': 0,
                },
            }
        }}) : ''
    }

    const json = JSON.stringify(nfeSale, null, 2);

    console.log('SALE JSON', json);

    return json;
}