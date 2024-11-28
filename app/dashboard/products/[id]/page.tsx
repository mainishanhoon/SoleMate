import EditForm from '@/components/forms/EditForm';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

async function fetchData(productId: string) {
  const data = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchData(params.id);

  return <EditForm data={data} />;
}
