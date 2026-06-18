export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  category: string;
  available: boolean;
  quantity: number;
  releaseDate: string;

  imageData?: string;
  imageName?: string;
  imageType?: string;
}
