import prisma from '@/lib/db';
import {
  LoadingProductCard,
  ProductCard,
} from '@/components/storefront/ProductCard';
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: 'Published',
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });

  return data;
}

export function FeaturedProducts() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wider md:text-4xl">
        Featured Products
      </h2>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedproducts />
      </Suspense>
    </>
  );
}

async function LoadFeaturedproducts() {
  noStore();
  const data = await getData();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
}
