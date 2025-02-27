import { Types } from 'mongoose';

export interface IShoppingCart {
  customer: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  total: number;
}
