import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

import { type Product } from '@/types/product';

interface ProductDropdownProps {
  data: Product[];
}

export default function ProductDropdown({ data }: ProductDropdownProps) {
  return (
    <div className="absolute top-full z-50 mt-0.5 w-full overflow-hidden">
      <ScrollArea className="h-65 w-full">
        <div className="divide-muted border-muted divide-y-2 border-2">
          {data.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              rel="noreferrer"
              target="_self"
            >
              <Card className="flex h-32 w-full flex-row items-center overflow-hidden rounded-none border-none shadow-none">
                <div className="flex-shrink-0">
                  <img
                    alt={product.imageName || product.name}
                    src={`${import.meta.env.VITE_BASE_URL}/${product.id}/image`}
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff';
                    }}
                    className="ml-2 aspect-square size-28 object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-1.5 p-4">
                  {/* Title and Price Group */}
                  <div className="flex w-full items-start justify-between">
                    <h4 className="text-foreground text-lg leading-tight font-bold">
                      {product.name}
                    </h4>
                    <Badge
                      variant={product.available ? 'default' : 'secondary'}
                      className="text-[10px] font-bold tracking-wider uppercase"
                    >
                      {product.available ? 'In Stock' : 'Out of Stock'}
                    </Badge>
                  </div>

                  {/* Labeled Metadata */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-primary shrink-0 text-base font-semibold">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-1">
                    <p className="text-muted-foreground text-[11px] font-bold tracking-widest uppercase">
                      Brand:{' '}
                      <span className="text-foreground font-medium">
                        {product.brand}
                      </span>
                    </p>
                    <p className="text-muted-foreground text-[11px] font-bold tracking-widest uppercase">
                      Category:{' '}
                      <span className="text-foreground font-medium">
                        {product.category}
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
