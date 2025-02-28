import { Types } from 'mongoose';
import { TOrderStatus, TPaymentMethod } from '../../interface';

export interface IBillingInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  streetAddress: string;
  city: string;
  postcode: string;
}

export interface IShippingInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  streetAddress: string;
  city: string;
  postcode: string;
}

export interface IOrder {
  user: Types.ObjectId;
  cart: Types.ObjectId[];
  orderId: string;
  billingInfo: IBillingInfo;
  shippingInfo?: IShippingInfo;
  transactionId: string;
  paymentMethod: TPaymentMethod;
  status: TOrderStatus;
  orderTotal: number;
  taxAmount: number;
  shippingFee: number;
  discountAmount?: number;
  grandTotal: number;
  orderedAt: Date;
  deliveredAt?: Date;
}
