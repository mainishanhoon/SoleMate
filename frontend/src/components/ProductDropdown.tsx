import { Card, Chip, ScrollShadow } from '@heroui/react';
import { ConfoundedSquare } from '@solar-icons/react-perf/BoldDuotone';
import { Fragment } from 'react';

import { Product } from '@/types/product.ts';

interface ProductDropdownProps {
  data: Product[];
  error?: Error;
  keyword: string;
}

export default function ProductDropdown({
  data,
  error,
  keyword,
}: ProductDropdownProps) {
  return (
    <div className="absolute top-full z-50 mt-2 w-full">
      <ScrollShadow
        className="max-h-[400px] w-full"
        hideScrollBar={false}
        size={0}
      >
        {error ? (
          <Card className="border-danger flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed bg-red-200 shadow-none">
            <Card.Header className="space-y-3 text-center">
              <Card.Title className="text-danger-foreground text-xl">
                Server Error
              </Card.Title>
              <Card.Description className="text-danger text-base">
                {error.message === 'Failed to fetch' ||
                error.message.includes('ERR_CONNECTION_REFUSED') ? (
                  <Fragment>
                    The server is currently unreachable. Please try again later.
                  </Fragment>
                ) : (
                  <Fragment>{error.message}</Fragment>
                )}
              </Card.Description>
            </Card.Header>
          </Card>
        ) : data.length > 0 ? (
          <div className="divide-border divide-y-2 rounded-lg border-2 border-dashed">
            {data.map((product, index) => (
              <a
                key={product.id}
                className="block"
                href={`/product/${product.id}`}
                rel="noreferrer"
                target="_blank"
              >
                <Card
                  className={`h-32 w-full items-stretch rounded-none md:flex-row ${index === 0 ? 'rounded-t-lg' : ''} ${index === data.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  <img
                    alt={product.imageName || product.name}
                    className="aspect-square rounded-xl object-cover select-none"
                    loading="lazy"
                    src={
                      product.imageData ||
                      'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg'
                    }
                  />
                  <div className="flex flex-1 flex-col">
                    <Card.Header>
                      <div className="flex w-full items-start justify-between">
                        <Card.Title className="pr-8 text-base font-bold">
                          {product.name}
                        </Card.Title>
                        <span className="text-primary text-sm font-medium">
                          ₹{product.price.toFixed(2)}
                        </span>
                      </div>
                      <Card.Description className="text-muted-foreground mb-1 block text-xs font-medium tracking-wider uppercase">
                        {product.brand} • {product.category}
                      </Card.Description>
                    </Card.Header>

                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col">
                        <span className="text-foreground text-sm font-medium">
                          {product.available && product.quantity > 0
                            ? `Only ${product.quantity} left`
                            : 'Out of stock'}
                        </span>
                        <span className="text-muted text-xs">
                          Released:&nbsp;
                          {new Date(product.releaseDate)
                            .toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })
                            .replace(/ /g, ' ')}
                        </span>
                      </div>
                      <Chip
                        className="w-full sm:w-auto"
                        color={product.available ? 'success' : 'warning'}
                        size="lg"
                        variant="primary"
                      >
                        {product.available ? 'Available' : 'Unavailable'}
                      </Chip>
                    </Card.Footer>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          <Card className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed shadow-none">
            <Card.Header className="flex flex-col items-center gap-1 text-center">
              <Card.Title className="flex flex-col items-center text-lg font-bold">
                <ConfoundedSquare className="text-accent" size={50} />
                <p>No products found</p>
              </Card.Title>
              <Card.Description className="text-sm">
                We couldn&apos;t find anything for &quot;{keyword}&quot;. Try a
                different keyword.
              </Card.Description>
            </Card.Header>
          </Card>
        )}
      </ScrollShadow>
    </div>
  );
}
