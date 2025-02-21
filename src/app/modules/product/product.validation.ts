import { z } from 'zod';
import { BrandType, CategoryType, Stock } from '../../constants';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    brand: z.enum([...BrandType] as [string, ...string[]]),
    price: z.number().min(0, 'Price should be positive'),
    discountPrice: z.number().min(0, 'Price should be positive').optional(),
    category: z.enum([...CategoryType] as [string, ...string[]]),
    description: z.string().min(1, 'Name is required').optional(),
    quantity: z.number().min(0, 'Price should be positive'),
    inStock: z.enum([...Stock] as [string, ...string[]]).optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    brand: z.enum([...BrandType] as [string, ...string[]]).optional(),
    price: z.number().min(0, 'Price should be positive').optional(),
    category: z.enum([...CategoryType] as [string, ...string[]]).optional(),
    description: z.string().min(1, 'Name is required').optional(),
    quantity: z.number().min(0, 'Price should be positive').optional(),
    inStock: z.enum([...Stock] as [string, ...string[]]).optional(),
  }),
});

export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
