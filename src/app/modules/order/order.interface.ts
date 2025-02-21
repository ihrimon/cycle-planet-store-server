import { Types } from 'mongoose';

export interface IOrder {
  cart: Types.ObjectId[];
  billingInfo: {
    name: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    streetAddress: string;
    city: string;
    postcode: string;
  };
  transactionId: string;
  status: string;
}
