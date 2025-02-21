import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    cart: [Schema.Types.ObjectId],
    billingInfo: {
      name: String,
      email: String,
      phone: String,
      country: String,
      state: String,
      streetAddress: String,
      city: String,
      postcode: String,
    },
    transactionId: String,
    status: String,
  },
  {
    timestamps: true,
  }
);
export const Order = model('Order', orderSchema);
