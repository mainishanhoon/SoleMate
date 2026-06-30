import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024;

export const BRAND_OPTIONS = [
  'Adidas',
  'Puma',
  'Campus',
  'One8',
  'Reebok',
] as const;

export const CATEGORY_OPTIONS = [
  'Sneakers',
  'Running',
  'Formal',
  'Boots',
  'Accessories',
] as const;

export const productSchema = z.object({
  name: z
    .string({ required_error: 'Product name is required' })
    .min(1, 'Product name is required')
    .max(25, 'Product name cannot exceed 25 characters'),

  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description is required')
    .max(255, 'Description cannot exceed 255 characters'),

  brand: z.enum(BRAND_OPTIONS, {
    errorMap: () => ({ message: 'Brand must be from the given options.' }),
  }),

  category: z.enum(CATEGORY_OPTIONS, {
    errorMap: () => ({
      message: 'Category must be from the given options.',
    }),
  }),

  price: z.coerce
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .positive('Price must be greater than 0'),

  available: z.boolean().default(true),

  releaseDate: z.coerce.date({
    required_error: 'Release date is required',
    invalid_type_error: 'Please enter a valid date',
  }),

  imageData: z
    .instanceof(File, { message: 'Image is required' })
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      'File is too large (max 1MB)',
    ),
});
