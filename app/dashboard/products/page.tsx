import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CircleFadingPlus } from 'lucide-react';
import Link from 'next/link';

export default function page() {
  return (
    <section>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <CircleFadingPlus size={20} strokeWidth={3} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className='lg:mt-5'>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
