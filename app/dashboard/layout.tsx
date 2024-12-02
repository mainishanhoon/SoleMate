import { ReactNode } from 'react';
import PageContainer from '@/components/PageContainer';
import AdminHeader from '@/components/AdminHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <PageContainer scrollable>
        <main className="p-2 md:p-3 lg:p-5">{children}</main>
      </PageContainer>{' '}
    </>
  );
}
