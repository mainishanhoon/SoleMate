import { KeyboardEvent, useState } from 'react';
import { Card, Chip, InputGroup, Kbd, Spinner, TextField } from '@heroui/react';
import { RoundedMagnifier } from '@solar-icons/react-perf/BoldDuotone';
import { useQuery } from '@tanstack/react-query';

import { searchProduct } from '@/service.ts';

export default function SearchInput() {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', searchTerm],
    queryFn: () => searchProduct(searchTerm),
    enabled: searchTerm.length > 0,
  });

  const handleSearch = () => {
    if (input.trim()) {
      setSearchTerm(input);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="relative w-full">
      <TextField
        fullWidth
        aria-label="Search"
        type="search"
        value={input}
        onChange={(val: string) => setInput(val)}
        onKeyDown={handleKeyDown}
      >
        <InputGroup className="">
          <InputGroup.Prefix>
            <RoundedMagnifier />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="Search..." />
          <InputGroup.Suffix>
            {isLoading ? (
              <Spinner className="size-4" />
            ) : (
              <Kbd
                className="hidden cursor-pointer opacity-70 hover:opacity-100 lg:inline-flex"
                onClick={handleSearch}
              >
                <Kbd.Content className="font-bricolage">Go</Kbd.Content>
              </Kbd>
            )}
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>

      {isError && (
        <div className="absolute top-full mt-2 w-full rounded-lg border border-red-200 bg-red-50 p-2 text-sm text-red-500">
          Error searching products.
        </div>
      )}

      {!isError && (data ?? []).length > 0 && (
        <div className="absolute top-full z-50 mt-2 flex w-full flex-col gap-1">
          {data?.map((product) => (
            <a
              key={product.id}
              className="block"
              href={`/product/${product.id}`}
              rel="noreferrer"
              target={'_blank'}
            >
              <Card className="h-32 w-full items-stretch rounded-xl border-2 md:flex-row">
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
      )}
    </div>
  );
}
