// import { addItem } from '@/lib/actions';
// import { ShoppingBagButton } from '@/components/SubmitButtons';
import { FeaturedProducts } from '@/components/storefront/Featured';
import { ImageSlider } from '@/components/storefront/ImageSlider';
import prisma from '@/lib/db';
import {
  BadgeIndianRupee,
  GlobeLock,
  HandCoins,
  ShoppingCart,
  Trophy,
  Truck,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Params {
  params: Promise<{ name: string }>;
}

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      images: true,
      name: true,
      price: true,
      description: true,
      materialType: true,
      closureType: true,
      heelType: true,
      style: true,
      countryOfOrigin: true,
      manufacturer: true,
      weight: true,
      dimensions: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function ProductIdRoute({ params }: Params) {
  noStore();
  const resolvedParam = await params;
  const data = await getData(resolvedParam.id);
  // const addProducttoShoppingCart = addItem.bind(null, data.id);
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-6 sm:px-16 md:grid-cols-2 lg:gap-x-24">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-bold tracking-wider">{data.name}</h1>
          <Badge
            variant="secondary"
            className="mt-3 rounded-lg text-3xl font-bold tracking-wider text-primary"
          >
            ₹{data.price}
          </Badge>
          <div className="my-5 flex gap-2">
            <Button
              asChild
              variant="secondary"
              className="w-full space-x-2 border-2 border-muted-foreground"
            >
              <Link href={`/product/`}>
                <ShoppingCart strokeWidth={2.5} />
                <span className="tracking-wider">Add to Cart</span>
              </Link>
            </Button>
            <Button asChild className="w-full space-x-2">
              <Link href={`/product/`}>
                <BadgeIndianRupee strokeWidth={2.5} />
                <span className="tracking-widest">Purchase</span>
              </Link>
            </Button>
          </div>
          <Separator className="my-2 h-0.5" />
          {data.description}
          <div className="flex justify-center md:justify-start">
            <div className="my-3 grid grid-cols-3 gap-3 sm:gap-5 md:grid-cols-4">
              <Badge
                variant="secondary"
                className="size-24 flex-col justify-center gap-2 rounded-lg text-center"
              >
                <Trophy size={35} color="hsl(var(--muted-foreground))" />
                <span className="font-mont text-xs tracking-wider text-muted-foreground">
                  Top Brand
                </span>
              </Badge>
              <Badge
                variant="secondary"
                className="size-24 flex-col justify-center gap-2 rounded-lg text-center"
              >
                <GlobeLock size={35} color="hsl(var(--muted-foreground))" />
                <span className="font-mont text-xs tracking-wider text-muted-foreground">
                  Secure Transaction
                </span>
              </Badge>
              <Badge
                variant="secondary"
                className="size-24 flex-col justify-center gap-2 rounded-lg text-center"
              >
                <Truck size={35} color="hsl(var(--muted-foreground))" />
                <span className="font-mont text-xs tracking-wider text-muted-foreground">
                  Free Delivery
                </span>
              </Badge>
              <Badge
                variant="secondary"
                className="size-24 flex-col justify-center gap-2 rounded-lg text-center"
              >
                <HandCoins size={35} color="hsl(var(--muted-foreground))" />
                <span className="text-xs font-bold tracking-wider text-muted-foreground">
                  Pay on Delivery
                </span>
              </Badge>
            </div>
          </div>

          <h3 className="text-2xl font-bold tracking-wider">
            Product Details:
          </h3>
          <div className="mt-1 grid grid-cols-[auto,auto,auto] gap-1 font-mont font-bold tracking-wider sm:w-96 sm:gap-x-5">
            <span>Material type</span>:<span>{data.materialType}</span>
            <span>Closure type</span>:<span>{data.closureType}</span>
            <span>Heel type</span>:<span>{data.heelType}</span>
            <span>Style</span>:<span>{data.style}</span>
            <span>Country of Origin</span>:<span>{data.countryOfOrigin}</span>
          </div>
          <h3 className="mt-5 text-nowrap text-2xl font-bold tracking-wider sm:gap-x-5">
            Additional Information:
          </h3>
          <div className="mt-1 grid grid-cols-[auto,auto,auto] gap-1 font-mont font-bold tracking-wider sm:w-96">
            <span>Manufacturer</span>:<span>{data.manufacturer}</span>
            <span>Weight</span>:<span>{data.weight} grams</span>
            <span>Dimensions</span>:<span>{data.dimensions} cms</span>
          </div>
          {/* <form action={addProducttoShoppingCart}>
            <ShoppingBagButton />
          </form> */}
        </div>
      </div>

      <div className="mt-10">
        <FeaturedProducts />
      </div>
    </>
  );
}
