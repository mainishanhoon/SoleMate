import { Link } from 'react-router';
import SearchInput from '@/components/searchInput';
import { Basketball } from '@solar-icons/react-perf/BoldDuotone';

export default function NavBar() {
  return (
    <nav className="font-bricolage bg-sidebar/50 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Basketball size={35} />
          <p className="text-xl font-bold">Sole<span className="text-muted-foreground">Mate</span></p>
        </Link>

        <div className="max-w-xl">
          <SearchInput />
        </div>

        <div className="flex gap-6">
          <Link
            to="/products"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Products
          </Link>
          <Link
            to="/products/add"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
}
