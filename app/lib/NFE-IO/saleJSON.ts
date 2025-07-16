import { SaleWithRelations } from "@/app/data-access/sale";

export function saleJSON(sale: SaleWithRelations): string{
    return JSON.stringify({
        'id': sale.id,

        'payment': [
            {
                'paymentDetail': [
                    {
                        'method': sale.paymentMethod?.name, // REVIEW [ Cash, Cheque, CreditCard, DebitCard, StoreCredict, FoodVouchers, MealVouchers, GiftVouchers, FuelVouchers, BankBill, BankDeposit, InstantPayment, WireTransfer, Cashback, StaticInstantPayment, StoreCredit, ElectronicPaymentNotInformed, WithoutPayment, Others ]
                        'paymentType': '', // REVIEW [ InCash, Term ]
                        'amount': sale.value,
                        'statePag': 'AC'
                    }
                ],

                'payback': 0
            }
        ],

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

        'items': sale.items ? sale.items.map(item => { return { 
            'description': item.product.description,
            'ncm': item.product.ncm,
            'cfop': item.product.cfop,
            'unit': item.product.unit,
            'quantity': item.quantity,
            'totalAmount': item.itemValue,

            'tax': {
                'icms': {
                    'cst': item.product.icmsCST,
                    'cson': item.product.icmsCSOSN
                },

                'pis': {
                    'cst': item.product.pisCST
                },

                'cofins': {
                    'cst': item.product.cofinsCST
                }
            }
            
        }}) : ''
        
    }, null, 2);
}