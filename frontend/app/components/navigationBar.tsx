import { Link, useLocation } from 'react-router';
import SearchInput from '@/components/searchInput';
import { FaceScanSquare } from '@solar-icons/react-perf/BoldDuotone';
import { ThemeToggle } from '@/components/themeToggle';

export default function NavBar() {
  const route = useLocation();

  return (
    <nav className="font-bricolage bg-sidebar/50 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl shrink-0 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <FaceScanSquare size={35} />
          <p className="text-xl font-bold">
            Sole<span className="text-muted-foreground">Mate</span>
          </p>
        </Link>

        <div className="max-w-xl">
          <SearchInput />
        </div>

        <div className="flex items-center gap-6">
          {route.pathname !== '/products' ? (
            <Link
              to="/products"
              className="hover:text-muted-foreground text-sm font-medium transition-colors"
            >
              Products
            </Link>
          ) : (
            <Link
              to="/products/add"
              className="hover:text-muted-foreground text-sm font-medium transition-colors"
            >
              Add Product
            </Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
