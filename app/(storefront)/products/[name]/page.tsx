import { ProductCard } from '@/components/storefront/ProductCard';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';

interface Params {
  params: Promise<{ name: string }>;
}

async function getData(productCategory: string) {
  switch (productCategory) {
    case 'all': {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: 'Published',
        },
      });

      return {
        title: 'All Products',
        data: data,
      };
    }
    case 'men': {
      const data = await prisma.product.findMany({
        where: {
          status: 'Published',
          category: 'Men',
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: 'Products for Men',
        data: data,
      };
    }
    case 'women': {
      const data = await prisma.product.findMany({
        where: {
          status: 'Published',
          category: 'Women',
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: 'Products to Women',
        data: data,
      };
    }
    case 'kids': {
      const data = await prisma.product.findMany({
        where: {
          status: 'Published',
          category: 'Kids',
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: 'Products for Kids',
        data: data,
      };
    }
    case 'elder': {
      const data = await prisma.product.findMany({
        where: {
          status: 'Published',
          category: 'Elder',
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: 'Products for Elder',
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({ params }: Params) {
  noStore();
  const resolvedParam = await params;
  const { data, title } = await getData(resolvedParam.name);
  return (
    <section>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
