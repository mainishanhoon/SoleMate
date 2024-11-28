'use server';

import prisma from '@/lib/db';
import fetchUser from '@/lib/hooks';
import { ProductSchema } from '@/lib/schema';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export async function CreateProductAction(
  currentState: unknown,
  formData: FormData,
) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, { schema: ProductSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenURLs = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim()),
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenURLs,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect('/dashboard/products');
}

export async function UpdateProductAction(currentState: unknown, formData: FormData) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, { schema: ProductSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenURLs = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim()),
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenURLs,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect('/dashboard/products');
}
