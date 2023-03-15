import { IPaymentMethodFactory } from "./interfaces/paymentMethodFactory.interface";
import { IPaymentType } from "./enums/paymentType.enum";
import { IPaymentMethod } from "./interfaces/paymentMethod.interface";
import { Visa, MasterCad, Paypal} from "./types";

const paymentTypeToPaymentMethodClass = {
    [IPaymentType.Visa]: Visa,
    [IPaymentType.MasterCard]: MasterCad,
    [IPaymentType.PayPal]: Paypal
}

export class PaymentMethodFactory  implements IPaymentMethodFactory{
    public static createPaymentType(type: IPaymentType): IPaymentMethod {
        const PaymentMethodClass = paymentTypeToPaymentMethodClass[type];
        if (!PaymentMethodClass) {
          throw new Error('Payment type not found');
        }
        return new PaymentMethodClass();
      }
    createPaymentType(type: IPaymentType): IPaymentMethod {
        return PaymentMethodFactory.createPaymentType(type);
    }
}