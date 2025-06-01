import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Solemate' },
    { name: 'description', content: 'Welcome to HeroUI!' },
  ];
};

export default function Index() {
  return <p>YOYO</p>;
}
