import Header from '@/components/Header';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import PageContainer from '@/components/PageContainer';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  return (
    <>
      <Header />
      <PageContainer scrollable>
        <main className="p-2 md:p-3 lg:p-5">{children}</main>
      </PageContainer>
    </>
  );
}
