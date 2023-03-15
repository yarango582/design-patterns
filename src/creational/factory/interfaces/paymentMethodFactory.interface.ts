import { IPaymentMethod } from './paymentMethod.interface';
import { IPaymentType } from '../enums/paymentType.enum';

export interface IPaymentMethodFactory {
    createPaymentType(type: IPaymentType): IPaymentMethod;
}