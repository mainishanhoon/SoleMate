import { title } from '@/components/primitives.ts';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl p-6 font-sans">
      <h1 className={title()}>Product Catalog</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        Home
      </div>
    </div>
  );
}
