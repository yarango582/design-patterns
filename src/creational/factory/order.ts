import { IPaymentType } from "./enums/paymentType.enum";
import { IPaymentMethod } from "./interfaces/paymentMethod.interface";
import { PaymentMethodFactory } from "./paymentMethod.factory";

export class Order {
    public paymentType?: IPaymentMethod;
    public commision: number = 0;

    constructor(
        private type: IPaymentType,
        public amount: number
    ) {}

    public create(): void {
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
        this.commision = this.paymentType.commision * this.amount;
    }
}