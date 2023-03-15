import { PaymentMethodFactory } from "../../../creational/factory/paymentMethod.factory";
import { IPaymentType } from "../../../creational/factory/enums/paymentType.enum";
import { Visa, MasterCad, Paypal } from "../../../creational/factory/types";

describe('PaymentMethodFactory', () => {
    describe('createPaymentType', () => {
      it('should create Visa payment method', () => {
        const visaPayment = PaymentMethodFactory.createPaymentType(IPaymentType.Visa);
        expect(visaPayment).toBeInstanceOf(Visa);
      });

      it('should create MasterCard payment method', () => {
        const masterCardPayment = PaymentMethodFactory.createPaymentType(IPaymentType.MasterCard);
        expect(masterCardPayment).toBeInstanceOf(MasterCad);
      });

      it('should create PayPal payment method', () => {
        const payPalPayment = PaymentMethodFactory.createPaymentType(IPaymentType.PayPal);
        expect(payPalPayment).toBeInstanceOf(Paypal);
      });

      it('should throw error for invalid payment type', () => {
        expect(() => PaymentMethodFactory.createPaymentType('invalidType' as unknown as IPaymentType)).toThrowError('Payment type not found');
      });
    });
  });