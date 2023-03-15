import { IPaymentMethod } from "../interfaces/paymentMethod.interface";


/* MasterCad is a class that implements the IPaymentMethod interface. */
export class MasterCad implements IPaymentMethod {
    get commision(): number {
        return 0.08;
    }
}