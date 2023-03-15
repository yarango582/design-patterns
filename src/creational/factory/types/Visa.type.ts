import { IPaymentMethod } from "../interfaces/paymentMethod.interface";

/* Visa implements IPaymentMethod */
export class Visa implements IPaymentMethod {
    get commision(): number {
        return 0.05;
    }
}