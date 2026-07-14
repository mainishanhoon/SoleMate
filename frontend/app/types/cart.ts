import type { Product } from '@/types/product';

export interface Cart extends Product {
  quantity: number;
}