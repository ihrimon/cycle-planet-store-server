import { model, Schema } from 'mongoose';
import { IDescription, IProduct, ISpecification } from './product.interface';
import {
  BrakeType,
  BrandType,
  CategoryType,
  ChainMaterial,
  ColorOptions,
  Drivetrain,
  FrameMaterial,
  HandlebarType,
  SeatType,
  Suspension,
  TireType,
} from '../../constants';

const descriptionSchema = new Schema<IDescription>({
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  features: { type: [String], required: true },
  warrantyInfo: { type: String, required: true },
});

const specificationSchema = new Schema<ISpecification>({
  frameMaterial: { type: String, enum: FrameMaterial, required: true },
  wheelSize: { type: Number, required: true },
  tireType: { type: String, enum: TireType, required: true },
  suspension: { type: String, enum: Suspension, required: true },
  brakeType: { type: String, enum: BrakeType, required: true },
  gearCount: { type: Number, required: true },
  weight: { type: Number, required: true },
  colorOptions: { type: String, enum: ColorOptions, required: true },
  handlebarType: { type: String, enum: HandlebarType, required: true },
  seatType: { type: String, enum: SeatType, required: true },
  drivetrain: { type: String, enum: Drivetrain, required: true },
  chainMaterial: { type: String, enum: ChainMaterial, required: true },
  maxLoadCapacity: { type: Number, required: true },
  lighting: { type: Boolean, default: true },
  fenders: { type: Boolean, default: true },
  cargoRack: { type: Boolean, default: true },
  bottleHolder: { type: Boolean, default: true },
  warranty: { type: Number, required: true },
});

// product schema model
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, enum: CategoryType, required: true },
    brand: { type: String, enum: BrandType, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productImg: { type: [String] },
    description: { type: descriptionSchema, required: true },
    specification: { type: specificationSchema, required: true },
    sku: { type: String, unique: true },
    tags: { type: [String] },
    averageRating: { type: Number, default: 4.7 },
    reviewCount: { type: Number, default: 27 },
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    addDate: {
      type: String,
      default: () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      },
    },
  },
  { timestamps: true }
);

export const Product = model<IProduct>('Product', productSchema);
