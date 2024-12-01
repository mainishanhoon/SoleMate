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
    take: 3,
  });

  return data;
}

export function FeaturedProducts() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-wider">Featured Items</h2>
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
    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
}