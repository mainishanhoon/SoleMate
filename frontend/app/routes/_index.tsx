import { ThemeToggle } from '@/components/themeToggle';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SoleMate' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function _index() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <a href={'/products'}> Products</a>
      <ThemeToggle />
    </section>
  );
}
