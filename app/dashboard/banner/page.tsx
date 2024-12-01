import prisma from '@/lib/db';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ChevronLeft, CircleFadingPlus, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';
import { columns } from '@/components/tables/banner/Columns';
import { DataTable } from '@/components/tables/banner/DataTable';

async function fetchData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function BannerRoute() {
  noStore();
  const data = await fetchData();
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard">
              <ChevronLeft size={25} strokeWidth={3} />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-wider">Banner</h1>
        </div>
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/banner/create">
            <CircleFadingPlus size={20} strokeWidth={3} />
            <span>Add Banner</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-xl tracking-wider">
            Banner Details
          </CardTitle>
          <CardDescription className="font-bold tracking-wider">
            Efficiently organize, view, and manage your banners.{' '}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={columns} />
        </CardContent>
      </Card>
    </section>
  );
}
