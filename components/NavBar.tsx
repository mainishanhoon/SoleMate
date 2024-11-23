'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { NavigationLinks } from '@/constants/navItems';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {NavigationLinks.map((label) => (
        <Link
          href={label.href}
          key={label.name}
          className={cn(
            pathname == label.href
              ? 'bg-primary/20 text-primary'
              : 'bg-muted text-muted-foreground hover:text-foreground/5',
            'text-md mx-1 mt-1 flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:text-primary/50',
          )}
        >
          <label.icon size={25} strokeWidth={2.5} />
          <p className="font-bold tracking-wider">{label.name}</p>
        </Link>
      ))}
    </>
  );
}
