import { model, Schema } from 'mongoose';
import { BrandType, CategoryType, Stock, } from '../../constants';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    brand: {
      type: String,
      enum: BrandType
    },
    category: {
      type: String,
      enum: CategoryType,
    },
    description: {
      type: String,
    },
    productImg: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: String,
      enum: Stock,
      default: 'in-stock',
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model('Product', productSchema);

