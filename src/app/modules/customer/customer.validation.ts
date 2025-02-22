import { z } from 'zod';
import { Gender, OrderStatus, PaymentMethod } from '../../constants';

// address validation
const AddressSchema = z.object({
  street: z.string().min(1, { message: 'Street address is required!' }),
  city: z.string().min(1, { message: 'City name is required!' }),
  state: z.string().min(1, { message: 'State name is required!' }),
  zipCode: z
    .string()
    .min(4, { message: 'Zip code must be at least 4 characters long!' }),
  country: z.string().min(1, { message: 'Country name is required!' }),
});

// customer order validation
const CustomerOrderSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format.',
  }),
  items: z
    .array(z.string())
    .min(1, { message: 'At least one item is required in the order.' }),
  totalAmount: z
    .number()
    .positive({ message: 'Total amount must be a positive number.' }),
  status: z.enum([...OrderStatus] as [string, ...string[]]).optional(),
});

// create customer validation
const createCustomerSchema = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(3, { message: 'Full name must be at least 3 characters long.' }),
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters long.' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email format.' }),
    phone: z
      .string()
      .regex(/^\+?[0-9]{7,15}$/, { message: 'Invalid phone number format.' })
      .optional(),
    profileImage: z.string().optional(),
    bio: z
      .string()
      .max(150, { message: 'Bio must be within 150 characters.' })
      .optional(),
    gender: z.enum([...Gender] as [string, ...string[]]).optional(),
    dob: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format.',
      })
      .optional(),
    billingAddress: AddressSchema,
    shippingAddress: AddressSchema.optional(),
    paymentMethods: z
      .enum([...PaymentMethod] as [string, ...string[]])
      .optional()
      .optional(),
    orderHistory: z.array(CustomerOrderSchema).optional(),
    wishlist: z.array(z.string()).optional(),
  }),
});

// update address validation
const updateAddressSchema = z.object({
  street: z
    .string()
    .min(1, { message: 'Street address is required!' })
    .optional(),
  city: z.string().min(1, { message: 'City name is required!' }).optional(),
  state: z.string().min(1, { message: 'State name is required!' }).optional(),
  zipCode: z
    .string()
    .min(4, { message: 'Zip code must be at least 4 characters long!' })
    .optional(),
  country: z
    .string()
    .min(1, { message: 'Country name is required!' })
    .optional(),
});

// update customer order validation
const updateCustomerOrderSchema = z.object({
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date format.',
    })
    .optional(),
  items: z
    .array(z.string())
    .min(1, { message: 'At least one item is required in the order.' })
    .optional(),
  totalAmount: z
    .number()
    .positive({ message: 'Total amount must be a positive number.' })
    .optional(),
  status: z.enum([...OrderStatus] as [string, ...string[]]).optional(),
});

// update customer validation
const updateCustomerSchema = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(3, { message: 'Full name must be at least 3 characters long.' })
      .optional(),
    username: z
      .string()
      .min(3, { message: 'Full name must be at least 3 characters long.' })
      .optional(),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email format.' })
      .optional(),
    phone: z
      .string()
      .regex(/^\+?[0-9]{7,15}$/, { message: 'Invalid phone number format.' })
      .optional(),
    profileImage: z.string().optional(),
    bio: z
      .string()
      .max(150, { message: 'Bio must be within 150 characters.' })
      .optional(),
    gender: z.enum([...Gender] as [string, ...string[]]).optional(),
    dob: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format.',
      })
      .optional(),
    billingAddress: updateAddressSchema.optional(),
    shippingAddress: updateAddressSchema.optional(),
    paymentMethods: z.enum([...Gender] as [string, ...string[]]).optional(),
    orderHistory: z.array(updateCustomerOrderSchema).optional(),
    wishlist: z.array(z.string()).optional(),
  }),
});

export const customerValidation = {
  createCustomerSchema,
  updateCustomerSchema,
};
