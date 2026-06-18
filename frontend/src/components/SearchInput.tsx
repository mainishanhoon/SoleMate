import { KeyboardEvent, useState } from 'react';
import { InputGroup, Kbd, Spinner, TextField } from '@heroui/react';
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

      {/* Error Handling */}
      {isError && (
        <div className="absolute top-full mt-2 w-full rounded-lg border border-red-200 bg-red-50 p-2 text-sm text-red-500">
          Error searching products.
        </div>
      )}

      {/* Results Rendering */}
      {!isError && (data ?? []).length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-lg border bg-white shadow-lg">
          {data?.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer border-b p-3 hover:bg-gray-100"
            >
              <p className="font-semibold">{product.name}</p>
              <p className="text-xs text-gray-500">{product.brand}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
