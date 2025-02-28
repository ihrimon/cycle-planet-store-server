import { model, Schema, Types } from 'mongoose';
import { IBillingInfo, IOrder, IShippingInfo } from './order.interface';
import { OrderStatus, PaymentMethod } from '../../constants';

const billingInfoSchema = new Schema<IBillingInfo>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
});

const shippingInfoSchema = new Schema<IShippingInfo>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
postcode: { type: String, required: true },
});

const OrderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
  orderId: {type: String, requireed: true},
  billingInfo: { type: billingInfoSchema, required: true },
  shippingInfo: { type: shippingInfoSchema },
  transactionId: { type: String, required: true },
  paymentMethod: { type: String, enum: PaymentMethod, required: true },
  status: {
    type: String,
    enum: OrderStatus,
    default: 'Processing',
  },
  orderTotal: { type: Number, required: true },
  taxAmount: { type: Number, required: true },
  shippingFee: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  grandTotal: { type: Number, required: true },
  orderedAt: { type: Date, default: Date.now },
  deliveredAt: { type: Date },
});

export const Order = model<IOrder>('Order', OrderSchema);
