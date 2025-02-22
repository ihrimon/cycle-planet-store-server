import { model, Schema } from 'mongoose';
import { IAddress, ICustomer, ICustomerOrder } from './customer.interface';
import { Gender, OrderStatus, PaymentMethod } from '../../constants';

// address schema
const AddressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// customer order schema
const CustomerOrderSchema = new Schema<ICustomerOrder>({
  orderId: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  items: { type: [String], required: true },
  totalAmount: { type: Number, required: true },
  transactionId: { type: String },
  status: { type: String, enum: OrderStatus, required: true },
});

// customer schema
const CustomerSchema = new Schema<ICustomer>(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    profileImage: { type: String },
    bio: { type: String },
    gender: { type: String, enum: Gender },
    dob: { type: Date },
    billingAddress: { type: AddressSchema, required: true },
    shippingAddress: { type: AddressSchema },
    paymentMethods: { type: String, enum: PaymentMethod },
    orderHistory: { type: [CustomerOrderSchema] },
    wishlist: { type: [String] },
  },
  { timestamps: true }
);

export const Customer = model<ICustomer>('Customer', CustomerSchema);
