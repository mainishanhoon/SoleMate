import { layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  route('/', './routes/_index.tsx'),

  layout('./routes/products/_layout.tsx', [
    route('products', './routes/products/_index.tsx'),
    route('products/search', './routes/products/search.ts'),
    route('products/:id', './routes/products/$id.tsx'),
    route('products/add', './routes/products/add.tsx'),
  ]),
] satisfies RouteConfig;
