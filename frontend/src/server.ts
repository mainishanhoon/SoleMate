import { Product } from '@/types/product.ts';

export const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:8080/api/product/${id}`);

  if (!res.ok) {
    throw new Error('Product blueprint profile missing from database mapping.');
  }

  return res.json();
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`http://localhost:8080/api/product`);

  if (!res.ok) {
    throw new Error('Product blueprint profile missing from database mapping.');
  }

  return res.json();
};
