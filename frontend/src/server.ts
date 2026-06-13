import { Product } from '@/types/product.ts';

export const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:8080/api/products/${id}`);

  if (!res.ok) {
    throw new Error('Product blueprint profile missing from database mapping.');
  }

  return res.json();
};
