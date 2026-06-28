import { Link, type LoaderFunctionArgs, useLoaderData } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CartCheck, EyeScan } from '@solar-icons/react-perf/BoldDuotone';
import type { Product } from '@/types/product';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const response = await fetch(`${String(process.env.BASE_URL)}/${id}`);

  if (!response.ok) {
    throw new Response('Product not found', { status: 404 });
  }

  const product: Product = await response.json();

  return Response.json({ product });
}

export default function ProductDetail() {
  const { product } = useLoaderData();

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <Card key={product.id} corner={true}>
        <img
          alt={'footwear'}
          src={'https://images.unsplash.com/photo-1542291026-7eec264c27ff'}
          className="h-60 w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <CardHeader>
          <CardTitle className="font-bricolage text-2xl font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription>{product.description}</CardDescription>
          <div className="font-bricolage mt-2 flex items-center justify-between">
            <p className="text-lg font-bold">₹{product.price}</p>
            <span className="bg-muted rounded px-2 py-1 text-xs font-bold tracking-wider uppercase">
              {product.brand}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <p className="text-muted-foreground">Category</p>
            <p className="font-medium">{product.category}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-muted-foreground">Availability</p>
            <Badge variant={product.available ? 'success' : 'warning'}>
              {product.available ? 'In Stock' : 'Out of Stock'} ( left)
            </Badge>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-muted-foreground">Release Date</p>
            <span className="text-foreground font-medium">
              {new Date(product.releaseDate).toLocaleDateString('en-IN', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </span>
          </div>
        </CardContent>

        <CardFooter pattern={true} className="flex justify-between">
          <Button corner={true} variant="secondary">
            <CartCheck /> <span>Add to Cart</span>
          </Button>
          <Link to={`${product.id}`}>
            <Button corner={true}>
              <EyeScan /> <span>Show Product</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
