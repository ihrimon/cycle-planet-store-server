import { z } from 'zod';
import { CustomerStatus, UserRole } from '../../constants';

const updateCustomerValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required')
      .optional(),
    password: z
      .string()
      .min(6, 'Password should be at least 6 characters long')
      .max(20, 'Password should not exceed 20 characters')
      .optional(),
    role: z
      .enum([...UserRole] as [string, ...string[]], {
        message: 'Invalid user role type',
      })
      .optional(),
  }),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...CustomerStatus] as [string, ...string[]], {
      message: 'Invalid user role type',
    }),
  }),
});

export const customerValidation = {
  changeStatusValidationSchema,
  updateCustomerValidationSchema,
};
