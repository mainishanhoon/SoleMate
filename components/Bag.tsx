import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Bag() {
  return (
    <section className="relative flex">
      <Link
        href="/bag"
        className="relative flex aspect-square cursor-pointer items-center justify-center rounded-full"
      >
        <Button asChild variant="outline" size="icon">
          <ShoppingBag
            size={25}
            color="hsl(var(--accent-foreground))"
            className="aspect-square p-1.5"
          />
        </Button>
        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white sm:-right-1.5 sm:-top-1.5">
          3
        </span>
      </Link>
    </section>
  );
}
