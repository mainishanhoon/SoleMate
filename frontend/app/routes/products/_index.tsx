import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';
import { CartCheck, EyeScan } from '@solar-icons/react-perf/BoldDuotone';
import { Link, useLoaderData } from 'react-router';
import type { Route } from '../../../.react-router/types/app/+types/root';
import ChatBot from '@/components/chatBot';
import { toast } from 'sonner';
import { useCart } from '@/providers/CartProvider';

export async function loader({
  request: _request,
}: Route.LoaderArgs): Promise<{ data: Product[] }> {
  const response = await fetch(`${process.env.VITE_BASE_URL}/api/product`);
  if (!response.ok) throw new Error('Failed to fetch');

  const products: Product[] = await response.json();
  return { data: products };
}

export default function ProductIndex() {
  const { data } = useLoaderData();
  const { addToCart } = useCart();

  return (
    <section className="p-4">
      <ChatBot />
      <h1 className="mb-6 text-2xl font-bold">Our Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product: Product) => (
          <Card
            key={product.id}
            corner={true}
            className="font-bricolage flex h-full flex-col gap-4"
          >
            <img
              alt={'shoe'}
              src={`${import.meta.env.VITE_BASE_URL}/api/product/${product.id}/image`}
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
                  {product.available ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">Release Date</p>
                <span className="text-foreground font-medium">
                  {new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  }).format(new Date(product.releaseDate))}
                </span>
              </div>
            </CardContent>

            <CardFooter
              pattern={true}
              className="mt-auto flex justify-between p-0"
            >
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
              <Link to={String(product.id)}>
                <Button corner={true}>
                  <EyeScan /> <span>Show Product</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
