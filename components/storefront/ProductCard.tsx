import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { BadgeIndianRupee, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
}

export function ProductCard({ item }: ProductProps) {
  return (
    <div className="rounded-3xl">
      <Carousel className="mx-auto w-full">
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square">
                <Image
                  src={item}
                  alt="Product Image"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="size sm:size-full rounded-3xl object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="px-2">
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider text-primary">
            {item.name}
          </h1>
          <h3 className="inline-flex items-center rounded-md bg-primary/20 px-2 py-1 text-xs font-bold tracking-wider text-primary ring-1 ring-inset ring-primary/10">
            ₹{item.price}
          </h3>
        </div>
        <p className="mt-1 line-clamp-2 font-mont text-sm font-bold text-muted-foreground">
          {item.description}
        </p>

        <div className="flex gap-2">
          <Button
            asChild
            variant="secondary"
            className="mt-2 w-full space-x-2 border-2 border-muted-foreground"
          >
            <Link href={`/product/${item.id}`}>
              <ShoppingCart strokeWidth={2.5} />
              <span className="tracking-wider">Add to Cart</span>
            </Link>
          </Button>
          <Button asChild className="mt-2 w-full space-x-2">
            <Link href={`/product/${item.id}`}>
              <BadgeIndianRupee strokeWidth={2.5} />
              <span className="tracking-widest">Purchase</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-[330px] w-full" />
      <div className="mt-2 flex flex-col gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="mt-5 h-10 w-full" />
    </div>
  );
}
