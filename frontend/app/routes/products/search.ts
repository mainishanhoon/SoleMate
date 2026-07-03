import { type LoaderFunctionArgs } from 'react-router';
import type { Product } from '@/types/product';

export interface SearchData {
  products?: Product[];
  error?: {
    message: string;
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword') || '';

  try {
    const response = await fetch(
      `/api/product/search?keyword=${encodeURIComponent(keyword)}`,
    );

    if (!response.ok) {
      return Response.json(
        { error: { message: 'Something went wrong' } },
        { status: response.status },
      );
    }

    const data = await response.json();

    return Response.json({ products: data });
  } catch (err) {
    return Response.json(
      { error: { message: 'Failed to connect to server' } },
      { status: 500 },
    );
  }
}
