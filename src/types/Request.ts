import { Address } from "./Address";
import { LineItem } from "./LineItem";
import { OrderTaxRecordType } from "./OrderTaxRecordType";

export interface CreateRequest {
    date: Date;
    currencyCode: string;
    shipTo: Address;
    lineItems: Array<LineItem>;
    type: OrderTaxRecordType;
    shippingAmount: number;
}
