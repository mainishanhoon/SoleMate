import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';

import { Product } from '@/types/product';
import { title, liquidGlass } from '@/components/primitives';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    name = 'Unnamed Product',
    brand = 'Generic',
    price = 0,
    category = 'Uncategorized',
    available = false,
    quantity = 0,
    description = 'No description available.',
    id,
  } = product;

  return (
    <Card
      className={liquidGlass({
        intensity: 'medium',
        radius: 'xl',
        interactive: available,
        class: `group w-full max-w-[320px] border-0 bg-transparent ${!available ? 'opacity-60' : ''}`,
      })}
    >
      <CardBody className="flex flex-col gap-4 overflow-hidden p-4">
        <a
          className="block cursor-pointer group-hover:no-underline"
          href={`/products/${id}`}
        >
          {/* Product Image Section */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-neutral-900/50">
            {(!available || quantity === 0) && (
              <span className="absolute inset-0 z-20 m-auto h-fit w-fit rounded-md bg-red-500/90 px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg">
                Out of Stock
              </span>
            )}
            <img
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
              src={`http://localhost:8080/api/products/${id}/image`}
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80';
              }}
            />
          </div>

          {/* Product Info Section */}
          <div className="mt-4 flex flex-col px-1 text-left">
            {/* Brand */}
            <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
              {brand}
            </span>

            {/* Name */}
            <h3
              className={title({
                color: 'white',
                size: 'sm',
                class: 'mt-1 line-clamp-1 block truncate font-bold',
              })}
            >
              {name}
            </h3>

            {/* Description */}
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">
              {description}
            </p>

            {/* Category & Stock Status */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
              <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 font-mono tracking-wider uppercase">
                {category}
              </span>
              <span
                className={
                  available && quantity > 0
                    ? 'text-green-400/80'
                    : 'text-red-400/80'
                }
              >
                {available && quantity > 0 ? `${quantity} left` : 'Sold Out'}
              </span>
            </div>

            {/* Price */}
            <p className="mt-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-xl font-black text-transparent">
              ${price.toFixed(2)}
            </p>
          </div>
        </a>

        {/* Action Button */}
        <Button
          className={`w-full rounded-xl font-semibold shadow-lg transition-all ${
            available && quantity > 0
              ? 'bg-white text-black hover:bg-neutral-200 active:scale-[0.98]'
              : 'cursor-not-allowed bg-neutral-800 text-neutral-500'
          }`}
          disabled={!available || quantity === 0}
          size="md"
        >
          {available && quantity > 0 ? 'Add to Cart' : 'Unavailable'}
        </Button>
      </CardBody>
    </Card>
  );
}
