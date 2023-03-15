import { IPaymentMethod } from "../interfaces/paymentMethod.interface";

/* Paypal is a payment method that has a commision of 0.02 */
export class Paypal implements IPaymentMethod {
    get commision(): number {
        return 0.02;
    }
}