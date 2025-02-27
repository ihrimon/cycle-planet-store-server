import { model, Schema } from 'mongoose';
import { IShoppingCart } from './cart.interface';

const shoppingCartSchema = new Schema<IShoppingCart>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const ShoppingCart = model('shopping-cart', shoppingCartSchema);
