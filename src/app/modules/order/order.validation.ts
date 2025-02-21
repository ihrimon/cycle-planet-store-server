import { z } from 'zod';

const createOrderValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be positive'),
  totalPrice: z.number().min(0, 'Total Price must be positive'),
});

const updateOrderValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be positive').optional(),
  totalPrice: z.number().min(0, 'Total Price must be positive').optional(),
});

export const orderValidation = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
};
