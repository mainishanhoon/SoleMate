import { Link } from '@remix-run/react';

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center py-3">
      <Link
        target="_blank"
        className="flex items-center gap-1 text-current"
        to="https://heroui.com/docs/guide/introduction"
        title="heroui.com homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">HeroUI</p>
      </Link>
    </footer>
  );
}
