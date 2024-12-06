'use server';

import prisma from '@/lib/db';
import fetchUser from '@/lib/hooks';
import { BannerSchema, ProductSchema } from '@/lib/schema';
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
      isFeatured: submission.value.isFeatured === true ? true : false,
      materialType: submission.value.materialType,
      closureType: submission.value.closureType,
      heelType: submission.value.heelType,
      style: submission.value.style,
      countryOfOrigin: submission.value.countryOfOrigin,
      manufacturer: submission.value.manufacturer,
      weight: submission.value.weight,
      dimensions: submission.value.dimensions,
    },
  });

  redirect('/dashboard/products');
}

export async function UpdateProductAction(
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

  const productId = formData.get('productId') as string;

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      images: flattenURLs,
      materialType: submission.value.materialType,
      closureType: submission.value.closureType,
      heelType: submission.value.heelType,
      style: submission.value.style,
      countryOfOrigin: submission.value.countryOfOrigin,
      manufacturer: submission.value.manufacturer,
      weight: submission.value.weight,
      dimensions: submission.value.dimensions,
    },
  });

  redirect('/dashboard/products');
}

export async function DeleteProduct(formData: FormData) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  await prisma.product.delete({
    where: {
      id: formData.get('productId') as string,
    },
  });

  redirect('/dashboard/products');
}

export async function CreateBanner(currentState: any, formData: FormData) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: BannerSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.banner.create({
    data: {
      title: submission.value.title,
      imageString: submission.value.imageString,
    },
  });

  redirect('/dashboard/banner');
}

export async function DeleteBanner(formData: FormData) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  await prisma.banner.delete({
    where: {
      id: formData.get('bannerId') as string,
    },
  });

  redirect('/dashboard/banner');
}
