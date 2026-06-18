import { useQuery } from '@tanstack/react-query';

import { fetchAllProducts } from '@/service.ts';
import ProductCard from '@/components/ProductCard.tsx';

export default function ProductPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  if (isLoading) {
    return (
      <div className="p-8 text-center text-lg text-gray-500">
        Loading all products...
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="p-8 text-center font-semibold text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No products found in the database.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-black text-gray-900">
        Product Catalog
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
