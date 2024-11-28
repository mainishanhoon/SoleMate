import { columns } from '@/components/table/Columns';
import { DataTable } from '@/components/table/DataTable';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/db';
import { ChevronLeft, CircleFadingPlus } from 'lucide-react';
import Link from 'next/link';

async function getData() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return data;
}

export default async function ProductsPage() {
  const data = await getData();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <ChevronLeft size={25} strokeWidth={3} className="p-1.5" />
          </Button>
          <h1 className="text-2xl font-bold tracking-wider">Products</h1>
        </div>
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <CircleFadingPlus size={20} strokeWidth={3} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl tracking-wider">
            Products Details
          </CardTitle>
          <CardDescription className="font-bold tracking-wider">
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={columns} />
        </CardContent>
      </Card>
    </section>
  );
}
