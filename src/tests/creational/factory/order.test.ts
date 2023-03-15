import { Order } from "../../../creational/factory/order";
import { IPaymentType } from "../../../creational/factory/enums/paymentType.enum";
import { Visa, MasterCad, Paypal } from "../../../creational/factory/types";


describe("Order", () => {
    it("should create an order with visa payment", () => {
        const order = new Order(IPaymentType.Visa, 100);
        order.create();
        expect(order.paymentType).toBeInstanceOf(Visa);
    });

    it("should create an order with mastercad payment", () => {
        const order = new Order(IPaymentType.MasterCard, 100);
        order.create();
        expect(order.paymentType).toBeInstanceOf(MasterCad);
    });

    it("should create an order with paypal payment", () => {
        const order = new Order(IPaymentType.PayPal, 100);
        order.create();
        expect(order.paymentType).toBeInstanceOf(Paypal);
    });
});