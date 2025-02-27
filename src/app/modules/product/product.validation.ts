import { z } from 'zod';
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

const createDescriptionValidationSchema = z.object({
  shortDescription: z.string().min(5),
  longDescription: z.string().min(15),
  features: z.array(z.string().min(2)).default([]),
  warrantyInfo: z.string().min(1),
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
    drivetrain: z.enum([...Drivetrain] as [string, ...string[]]),
    chainMaterial: z.enum([...ChainMaterial] as [string, ...string[]]),
    maxLoadCapacity: z.number().positive(),
    warranty: z.string().min(1),
});

// create product validation schema
const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    category: z.enum([...CategoryType] as [string, ...string[]]),
    brand: z.enum([...BrandType] as [string, ...string[]]),
    price: z.number().positive(),
    discountPrice: z.number().positive().optional(),
    quantity: z.number().int().positive(),
    productImg: z.array(z.string().url()).optional(),
    description: createDescriptionValidationSchema,
    // specification: createSpecificationValidationSchema.optional(),
    sku: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const updateDescriptionValidationSchema = z.object({
  shortDescription: z.string().min(5),
  longDescription: z.string().min(15),
  features: z.array(z.string().min(2)).default([]),
  warrantyInfo: z.string().min(1),
});

const updateSpecificationValidationSchema = z.object({
  frameMaterial: z.enum([...FrameMaterial] as [string, ...string[]]).optional(),
  wheelSize: z.number().positive().optional(),
  tireType: z.enum([...TireType] as [string, ...string[]]).optional(),
  suspension: z.enum([...Suspension] as [string, ...string[]]).optional(),
  brakeType: z.enum([...BrakeType] as [string, ...string[]]).optional(),
  gearCount: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  colorOptions: z.enum([...ColorOptions] as [string, ...string[]]).optional(),
  handlebarType: z.enum([...HandlebarType] as [string, ...string[]]).optional(),
  seatType: z.enum([...SeatType] as [string, ...string[]]).optional(),
  drivetrain: z.enum([...Drivetrain] as [string, ...string[]]).optional(),
  chainMaterial: z.enum([...ChainMaterial] as [string, ...string[]]).optional(),
  maxLoadCapacity: z.number().positive().optional(),
  warranty: z.string().min(1).optional(),
});

// update product validation schema
const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).optional(),
    category: z.enum([...CategoryType] as [string, ...string[]]).optional(),
    brand: z.enum([...BrandType] as [string, ...string[]]).optional(),
    price: z.number().positive().optional(),
    discountPrice: z.number().positive().optional(),
    quantity: z.number().int().positive().optional(),
    productImg: z.array(z.string().url()).optional(),
    description: updateDescriptionValidationSchema.optional(),
    specification: updateSpecificationValidationSchema.optional(),
    sku: z.string().optional().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const productValidationSchema = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
