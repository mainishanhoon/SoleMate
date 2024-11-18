import { z } from 'zod';

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number(),
  images: z.array(z.string().min(1, 'Atleast one Image is Required')),
  category: z.enum(['men', 'women', 'kids']),
  isFeatured: z.boolean(),
});
