import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/utils/db';
import { ChevronLeft, CircleFadingPlus } from 'lucide-react';
import Image from 'next/image';
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      alt={item.name}
                      src={item.images[0]}
                      height={100}
                      width={100}
                      className="size-16 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat('en-US').format(item.createdAt)}
                  </TableCell>
                  <TableCell className="text-end">
                    {/* Add action buttons or links here */}
                    <button>Edit</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
