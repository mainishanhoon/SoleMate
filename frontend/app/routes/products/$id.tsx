import { type LoaderFunctionArgs, useLoaderData } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useCart } from '@/providers/CartProvider';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { CartCheck, EyeScan } from '@solar-icons/react-perf/BoldDuotone';
import type { Product } from '@/types/product';
import { BASE_URL } from '@/lib/baseUrl';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const response = await fetch(`${BASE_URL}/api/product/${id}`);

  if (!response.ok) {
    throw new Response('Product not found', { status: 404 });
  }

  const product: Product = await response.json();

  const imageSrc = `${BASE_URL}/api/product/${product.id}/image`;

  return Response.json({ product, imageSrc });
}

export default function ProductDetail() {
  const { product, imageSrc } = useLoaderData();
  const { addToCart } = useCart();

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <Card key={product.id} corner={true} className="min-w-sm">
        <img
          alt={'footwear'}
          src={imageSrc}
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff';
          }}
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
          <Button
            onClick={() => {
              const addToCartPromise = () =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    addToCart(product);
                    resolve({ name: product.name });
                  }, 600);
                });

              toast.promise(addToCartPromise, {
                loading: 'Adding item to cart...',
                success: (data: any) =>
                  `${data.name} added to your cart successfully!`,
                error: 'Failed to add item. Please try again.',
              });
            }}
            corner={true}
            variant="secondary"
          >
            <CartCheck /> <span>Add to Cart</span>
          </Button>
          <Button corner={true}>
            <EyeScan /> <span>Show Product</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
