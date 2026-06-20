import { useEffect, useRef, useState } from 'react';
import { InputGroup, Kbd, TextField } from '@heroui/react';
import { RoundedMagnifier } from '@solar-icons/react-perf/BoldDuotone';
import { useQuery } from '@tanstack/react-query';

import { searchProduct } from '@/service.ts';
import ProductDropdown from '@/components/ProductDropdown.tsx';
import { SpinnersBlocksShuffle3 } from '@/components/icons.tsx';

export default function SearchInput() {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Parent controls visibility
  const containerRef = useRef<HTMLDivElement>(null);

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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', searchTerm],
    queryFn: () => searchProduct(searchTerm),
    enabled: searchTerm.length > 0,
  });

  const handleSearch = () => {
    if (input.trim()) {
      setSearchTerm(input);
      setIsOpen(true);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <TextField
        fullWidth
        aria-label="Search products"
        value={input}
        onChange={(val: string) => setInput(val)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      >
        <InputGroup>
          <InputGroup.Prefix>
            <RoundedMagnifier size={20} />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="Search..." />
          <InputGroup.Suffix>
            {isLoading ? (
              <SpinnersBlocksShuffle3
                className="text-muted opacity-50"
                size={20}
              />
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

      {isOpen && !isLoading && (
        <ProductDropdown
          data={data ?? []}
          error={isError ? (error as Error) : undefined}
          keyword={input}
        />
      )}
    </div>
  );
}
