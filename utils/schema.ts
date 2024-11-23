import { z } from 'zod';

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['Draft', 'Published', 'Archived']),
  price: z.number().min(1),
  images: z.array(z.string()).min(1, 'Atleast one Image is Required'),
  category: z.enum(['Men', 'Women', 'Kids']),
  isFeatured: z.boolean().optional(),
});
