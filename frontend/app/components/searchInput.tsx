import { useEffect, useRef, useState } from 'react';
import {
  RoundedMagnifier,
  WiFiRouterMinimalistic,
} from '@solar-icons/react-perf/BoldDuotone';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { useFetcher } from 'react-router';
import type { SearchData } from '@/routes/products/search';
import { SpinnersBlocksShuffle3 } from '@/components/icons';
import ProductDropdown from '@/components/productDropdown';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SearchInput() {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetcher = useFetcher<SearchData>();

  const handleSearch = () => {
    if (input.trim()) {
      fetcher
        .load(`/products/search?keyword=${encodeURIComponent(input)}`)
        .finally(() => setIsOpen(true));
    }
  };

  const products = fetcher.data?.products ?? [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isIdle = fetcher.state === 'idle';
  const hasData = products && products.length > 0;
  const error = fetcher.data?.error;

  return (
    <div ref={containerRef} className="relative min-w-lg">
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="bg-background placeholder:font-medium"
        />
        <InputGroupAddon align="inline-start">
          <RoundedMagnifier size={20} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {!isIdle && (
            <SpinnersBlocksShuffle3
              className="text-muted-foreground/50"
              size={20}
            />
          )}
        </InputGroupAddon>
      </InputGroup>

      {isOpen && isIdle && hasData && <ProductDropdown data={products} />}

      {isOpen && !hasData && (
        <div className="bg-background absolute top-full z-50 mt-0.5 flex h-32 w-full items-center justify-center border-x-2 border-b-2 p-4">
          <div className="text-center">
            <WiFiRouterMinimalistic
              className="text-muted-foreground mx-auto mb-2"
              size={40}
            />
            <p className="font-bold">No products found</p>
            <p className="text-muted-foreground text-sm">
              We couldn't find "{input}".
            </p>
          </div>
        </div>
      )}

      {error && (
        <Card className="border-destructive bg-background absolute top-full z-50 mt-0.5 flex h-32 w-full border-dashed shadow-none">
          <CardHeader className="flex flex-col items-center">
            <WiFiRouterMinimalistic
              className="text-muted-foreground mx-auto mb-2"
              size={40}
            />
            <CardTitle className="text-destructive text-xl">
              Server Error
            </CardTitle>
            <CardDescription className="text-destructive/80">
              {error.message}
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
