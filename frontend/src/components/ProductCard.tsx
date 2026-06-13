import React from 'react';
import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';

import { Product } from '@/types/product';
import { title, liquidGlass } from '@/components/primitives';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, brand, price, category, available, quantity, id } = product;

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
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-neutral-900/50">
            {!available && (
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

          <div className="mt-4 flex flex-col px-1 text-left">
            <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
              {brand}
            </span>
            <h3
              className={title({
                color: 'white',
                size: 'sm',
                class: 'mt-1 line-clamp-1 block truncate',
              })}
            >
              {name}
              {category}
              {quantity}
            </h3>
            <p className="mt-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-xl font-bold text-transparent">
              ${price.toFixed(2)}
            </p>
          </div>
        </a>

        <Button
          className={`w-full rounded-xl font-semibold shadow-lg transition-all ${
            available
              ? 'bg-white text-black hover:bg-neutral-200 active:scale-[0.98]'
              : 'cursor-not-allowed bg-neutral-800 text-neutral-500'
          }`}
          disabled={!available}
          size="md"
        >
          {available ? 'Add to Cart' : 'Unavailable'}
        </Button>
      </CardBody>
    </Card>
  );
};
