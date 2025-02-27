import { z } from 'zod';

const addShoppingCartValidationSchema = z.object({
  body: z.object({
    quantity: z.number().min(1).max(5),
    total: z.number().min(1),
  }),
});

const updateShoppingCartValidationSchema = z.object({
  body: z.object({
    quantity: z.number().min(1).max(5).optional(),
    total: z.number().min(1).optional(),
  }),
});

export const shoppingCartValidation = {
  addShoppingCartValidationSchema,
  updateShoppingCartValidationSchema,
};
