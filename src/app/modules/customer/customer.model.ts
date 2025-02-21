import { model, Schema } from 'mongoose';
import { ICustomer } from './customer.interface';

const CustomerSchema = new Schema<ICustomer>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    address: {
      street: { type: String },
      city: { type: String },
      zip: { type: String },
      state: { type: String },
      country: { type: String },
    },
    // orderHistory: [
    //   {
    //     orderId: { type: String, required: true },
    //     amount: { type: Number, required: true },
    //     date: { type: Date, required: true },
    //     status: {
    //       type: String,
    //       enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    //       required: true,
    //     },
    //   },
    // ],
    // wishlist: [{ type: String }],
    // cart: [
    //   {
    //     productId: { type: String, required: true },
    //     quantity: { type: Number, required: true },
    //   },
    // ],
    // reviews: [
    //   {
    //     productId: { type: String, required: true },
    //     rating: { type: Number, required: true, min: 1, max: 5 },
    //     comment: { type: String },
    //   },
    // ],
  },
  { timestamps: true }
);

export const Customer = model<ICustomer>('Customer', CustomerSchema);
