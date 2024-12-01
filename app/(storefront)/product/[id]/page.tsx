import { addItem } from '@/lib/actions';
import { ShoppingBagButton } from '@/components/SubmitButtons';
import { FeaturedProducts } from '@/components/storefront/Featured';
import { ImageSlider } from '@/components/storefront/ImageSlider';
import prisma from '@/lib/db';

import { StarIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      images: true,
      description: true,
      name: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function ProductIdRoute({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const data = await getData(params.id);
  const addProducttoShoppingCart = addItem.bind(null, data.id);
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-2 lg:gap-x-24">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>
          <p className="mt-2 text-3xl text-gray-900">${data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
          </div>
          <p className="mt-6 text-base text-gray-700">{data.description}</p>

          <form action={addProducttoShoppingCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>

      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </>
  );
}
