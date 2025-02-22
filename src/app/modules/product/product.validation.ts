import { z } from 'zod';
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

const createDescriptionValidationSchema = z.object({
  shortDescription: z.string().min(5),
  longDescription: z.string().min(15),
  features: z.array(z.string().min(2)),
});

const createSpecificationValidationSchema = z.object({
  frameMaterial: z.enum([...FrameMaterial] as [string, ...string[]]),
  wheelSize: z.number().positive(),
  tireType: z.enum([...TireType] as [string, ...string[]]),
  suspension: z.enum([...Suspension] as [string, ...string[]]),
  brakeType: z.enum([...BrakeType] as [string, ...string[]]),
  gearCount: z.number().positive(),
  weight: z.number().positive(),
  colorOptions: z.enum([...ColorOptions] as [string, ...string[]]),
  handlebarType: z.enum([...HandlebarType] as [string, ...string[]]),
  seatType: z.enum([...SeatType] as [string, ...string[]]),
  forkMaterial: z.enum([...ForkMaterial] as [string, ...string[]]),
  drivetrain: z.enum([...Drivetrain] as [string, ...string[]]),
  chainMaterial: z.enum([...ChainMaterial] as [string, ...string[]]),
  maxLoadCapacity: z.number().positive(),
  lighting: z.boolean(),
  fenders: z.boolean(),
  cargoRack: z.boolean(),
  bottleHolder: z.boolean(),
  warranty: z.string().min(1),
  countryOfOrigin: z.string().min(2),
});

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    category: z.enum([...CategoryType] as [string, ...string[]]),
    brand: z.enum([...BrandType] as [string, ...string[]]),
    price: z.number().positive(),
    discountPrice: z.number().positive(),
    quantity: z.number().int().positive(),
    inStock: z.boolean(),
    productImg: z.array(z.string().url()).optional(),
    description: createDescriptionValidationSchema,
    specification: createSpecificationValidationSchema,
    sku: z.string().optional(),
    tags: z.array(z.string()).optional(),
    averageRating: z.number().min(0).max(5).default(0),
    reviewCount: z.number().int().nonnegative().default(0),
    isFeatured: z.boolean().default(false),
    isNewArrival: z.boolean().default(false),
    isBestSeller: z.boolean().default(false),
    relatedProducts: z.array(z.string()).optional(),
  }),
});

const updateDescriptionValidationSchema = z.object({
  shortDescription: z.string().min(5).optional(),
  longDescription: z.string().min(15).optional(),
  features: z.array(z.string().min(2)).optional(),
  videoUrl: z.string().url().optional().optional(),
});

const updateSpecificationValidationSchema = z.object({
  frameMaterial: z.enum([...FrameMaterial] as [string, ...string[]]).optional(),
  wheelSize: z.number().positive().optional(),
  tireType: z.enum([...TireType] as [string, ...string[]]).optional(),
  suspension: z.enum([...Suspension] as [string, ...string[]]).optional(),
  brakeType: z.enum([...BrakeType] as [string, ...string[]]).optional(),
  gearCount: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  colorOptions: z
    .array(z.enum([...ColorOptions] as [string, ...string[]]))
    .optional(),
  handlebarType: z.enum([...HandlebarType] as [string, ...string[]]).optional(),
  seatType: z.enum([...SeatType] as [string, ...string[]]).optional(),
  forkMaterial: z.enum([...ForkMaterial] as [string, ...string[]]).optional(),
  drivetrain: z.enum([...Drivetrain] as [string, ...string[]]).optional(),
  chainMaterial: z.enum([...ChainMaterial] as [string, ...string[]]).optional(),
  maxLoadCapacity: z.number().positive().optional(),
  lighting: z.boolean().optional(),
  fenders: z.boolean().optional(),
  cargoRack: z.boolean().optional(),
  bottleHolder: z.boolean().optional(),
  warranty: z.string().min(1).optional(),
  countryOfOrigin: z.string().min(2).optional(),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).optional(),
    category: z.enum([...CategoryType] as [string, ...string[]]).optional(),
    brand: z.enum([...BrandType] as [string, ...string[]]).optional(),
    price: z.number().positive().optional(),
    discountPrice: z.number().positive().optional(),
    quantity: z.number().int().positive().optional(),
    inStock: z.boolean().optional(),
    productImg: z.array(z.string().url()).optional().optional(),
    description: updateDescriptionValidationSchema,
    specification: updateSpecificationValidationSchema,
    sku: z.string().optional().optional(),
    tags: z.array(z.string()).optional().optional(),
    averageRating: z.number().min(0).max(5).default(0).optional(),
    reviewCount: z.number().int().nonnegative().default(0).optional(),
    isFeatured: z.boolean().default(false).optional(),
    isNewArrival: z.boolean().default(false).optional(),
    isBestSeller: z.boolean().default(false).optional(),
    relatedProducts: z.array(z.string()).optional().optional(),
  }),
});

export const productValidationSchema = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
