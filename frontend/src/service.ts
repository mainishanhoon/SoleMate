import { Product } from '@/types/product.ts';

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:8080/api/product/${id}`);

  if (!res.ok) {
    throw new Error('Product blueprint profile missing from database mapping.');
  }

  return res.json();
}

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`http://localhost:8080/api/product`);

  if (!res.ok) {
    throw new Error('Product blueprint profile missing from database mapping.');
  }

  return res.json();
}

export async function searchProduct(value: string): Promise<Product[]> {
  const res = await fetch(
    `http://localhost:8080/api/product/search?keyword=${encodeURIComponent(value)}`
  );

  if (!res.ok) {
    throw new Error('Some Error Occurred on the Server');
  }

  return res.json();
}
