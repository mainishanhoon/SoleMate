import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['Draft', 'Published', 'Archived']),
  price: z.number().min(1),
  images: z.array(z.string()).min(1, 'At least one Image is Required'),
  category: z.enum(['Men', 'Women', 'Kids', 'Elder']),
  isFeatured: z.boolean().optional(),
  materialType: z.string(),
  closureType: z.string(),
  heelType: z.string(),
  style: z.string(),
  countryOfOrigin: z.string(),
  manufacturer: z.string(),
  weight: z.string(),
  dimensions: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export const BannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
});

export type Banner = z.infer<typeof BannerSchema>;
