import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchProduct } from '@/service.ts';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return isLoading ? (
    <div>Loading blueprint profile...</div>
  ) : (
    <div className="p-6">
      <h1>{product?.name ?? 'Unknown Product Blueprint'}</h1>

      <p>
        {product?.description ?? 'No description available for this mapping.'}
      </p>

      <span>Price: ${product?.price ?? 'TBD'}</span>
    </div>
  );
}
