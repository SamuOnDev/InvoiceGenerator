export class InvoiceDto {
    InvoiceDate?: string;
    CompanyId?: number;
    CompanyName?: string;
    UserId?: number;
    InvoiceTotalArticle?: number;
    InvoiceTotalPrice?: number;
    InvoiceTaxPercent?: number;
    InvoiceTaxPrice?: number;
    InvoicePriceWithTaxes?: number;
    InvoiceContents?: {};
}