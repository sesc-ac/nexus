import { Decimal } from "@prisma/client/runtime/library";

export type nfeSale = {
    id: string;
    operationType: string;
    destination: string;
    printType: string;
    purposeType: string;
    consumerType: string;
    presenceType: string;
    buyer: string | {
        name: string;
        type: string;
        taxRegime: string;
    };
    items: string | {
        code: string;
        description: string;
        ncm: string | null;
        cfop: string;
        unit: string;
        quantity: number;
        totalAmount: Decimal;
        unitAmount: Decimal;
        tax: {
            icms: {
                cst: number;
                origin: string;
            };
        };
    }[];
}