import { Types } from 'mongoose';

export interface ICustomer {
  name: string;
  email: string;
  phone?: string;
  address?: {
    country: string;
    state: string;
    street: string;
    city: string;
    postalCode: string;
  };
  // orderHistory?: {
  //   orderId: Types.ObjectId;
  //   amount: number;
  //   date: Date;
  //   status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  // }[];
  // wishlist?: string[];
  // cart?: {
  //   productId: Types.ObjectId;
  //   quantity: number;
  // }[];
  // reviews?: {
  //   productId: Types.ObjectId;
  //   rating: number;
  //   comment?: string;
  // }[];
}
