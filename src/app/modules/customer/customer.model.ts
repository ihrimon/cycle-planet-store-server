import { model, Schema } from 'mongoose';
import { IAddress, ICustomer, ICustomerOrder } from './customer.interface';
import { Gender, OrderStatus, PaymentMethod } from '../../constants';

// address schema
const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// customer order schema
const customerOrderSchema = new Schema<ICustomerOrder>({
  orderId: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  items: { type: [String], required: true },
  totalAmount: { type: Number, required: true },
  transactionId: { type: String },
  status: { type: String, enum: OrderStatus, required: true },
});

// customer schema
const customerSchema = new Schema<ICustomer>(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    profileImage: { type: String },
    bio: { type: String },
    gender: { type: String, enum: Gender },
    birthDate: { type: Date },
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    billingAddress: { type: addressSchema, required: true },
    shippingAddress: { type: addressSchema },
    paymentMethods: { type: String, enum: PaymentMethod, default: 'Stripe' },
    orderHistory: { type: [customerOrderSchema] },
    joinDate: { type: Date, default: Date.now },
    wishlist: { type: [String] },
  },
  { timestamps: true, 
    versionKey: false,
   }
);

export const Customer = model<ICustomer>('Customer', customerSchema);
