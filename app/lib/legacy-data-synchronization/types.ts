export type fetchedCashier = {
    CDLOCVENDA: string,
    CDPESSOA: string,
    DTABERTURA: string,
    HRABERTURA: string,
    HRFECHAMEN: string,
}

export type fetchedCashierOperator = {
    NMPESSOA: string,
}

export type fetchedCustomer = {
    CDCATEGORI: string,
    NMCLIENTE: string,
}

export type fetchedCustomerCategory = {
    DSCATEGORI: string,
}

export type fetchedPaymentMethod = {
    DSMOEDAPGT: string
}

export type fetchedProduct = {
    CDUNIDADE: string,
    DSPRODUTO: string,
}

export type fetchedSale = {
    CDPESSOA: string,
    CDUOP: string,
    DTVENDA: string,
    HRVENDA: string,
    SQCAIXA: string,
    SQMATRIC: string,
    SQVENDA: string,
    VLRECEBIDO: string,
}

export type fetchedSaleItem = {
    CDPESSOA: string,
    CDPRODUTO: string,
    QTPRODUTO: string,
    VLITEM: string,
    VLRECEBIDO: string,
}

export type fetchedSalePaymentMethod = {
    CDMOEDAPGT: string
}

export type fetchedSalePlace = {
    CDUOP: string,
    DSLOCVENDA: string,
}

export type fetchedUnit = {
    NMUOP: string,
}