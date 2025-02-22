import { model, Schema } from 'mongoose';
import { IDescription, IProduct, ISpecification } from './product.interface';
import {
  BrakeType,
  BrandType,
  CategoryType,
  ChainMaterial,
  ColorOptions,
  Drivetrain,
  ForkMaterial,
  FrameMaterial,
  HandlebarType,
  SeatType,
  Suspension,
  TireType,
} from '../../constants';

const DescriptionSchema = new Schema<IDescription>({
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  features: { type: [String], required: true },
});

const SpecificationSchema = new Schema<ISpecification>({
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
  forkMaterial: { type: String, enum: ForkMaterial, required: true },
  drivetrain: { type: String, enum: Drivetrain, required: true },
  chainMaterial: { type: String, enum: ChainMaterial, required: true },
  maxLoadCapacity: { type: Number, required: true },
  lighting: { type: Boolean, required: true },
  fenders: { type: Boolean, required: true },
  cargoRack: { type: Boolean, required: true },
  bottleHolder: { type: Boolean, required: true },
  warranty: { type: String, required: true },
  countryOfOrigin: { type: String, required: true },
});

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, enum: CategoryType, required: true },
    brand: { type: String, enum: BrandType, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    productImg: { type: [String] },
    description: { type: DescriptionSchema, required: true },
    specification: { type: SpecificationSchema, required: true },
    sku: { type: String, unique: true },
    tags: { type: [String] },
    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    relatedProducts: { type: [String] },
  },
  { timestamps: true }
);

export const Product = model<IProduct>('Product', ProductSchema);
