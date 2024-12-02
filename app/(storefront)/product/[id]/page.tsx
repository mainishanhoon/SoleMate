// import { addItem } from '@/lib/actions';
// import { ShoppingBagButton } from '@/components/SubmitButtons';
import { FeaturedProducts } from '@/components/storefront/Featured';
import { ImageSlider } from '@/components/storefront/ImageSlider';
import prisma from '@/lib/db';
import { GlobeLock, HandCoins, Trophy, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Params {
  params: Promise<{ name: string }>;
}

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
          <Separator className="my-2 h-0.5" />
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

          <h3 className="text-2xl font-bold tracking-wider">
            Product Details:
          </h3>
          <div className="mt-1 grid grid-cols-[auto,auto,auto] gap-1 font-mont font-bold tracking-wider sm:w-96 sm:gap-x-5">
            <span>Material type</span>:<span>Mesh</span>
            <span>Closure type</span>:<span>Lace-up</span>
            <span>Heel type</span>:<span>Block Heel</span>
            <span>Style</span>:<span>Running Shoes</span>
            <span>Country of Origin</span>:<span>India</span>
          </div>
          {/* {data.description} */}
          <h3 className="mt-5 text-2xl font-bold tracking-wider sm:gap-x-5">
            Additional Information:
          </h3>
          <div className="mt-1 grid grid-cols-[auto,auto,auto] gap-1 font-mont font-bold tracking-wider sm:w-96">
            <span>Manufacturer</span>:<span>Campus</span>
            <span>Packer</span>:<span>Campus Shoes</span>
            <span>Weight</span>:<span>900 g</span>
            <span>Dimensions</span>:<span>30.5 x 21.5 x 11.2 cm</span>
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
