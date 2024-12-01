import EditForm from '@/components/forms/EditForm';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

interface Params {
  params: Promise<{ id: string }>;
}

async function fetchData(productId: string) {
  const data = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({ params }: Params) {
  const resolvedParams = await params;

  const data = await fetchData(resolvedParams.id);

  return <EditForm data={data} />;
}
