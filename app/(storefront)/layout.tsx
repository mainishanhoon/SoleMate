import { ReactNode } from 'react';
import PageContainer from '@/components/PageContainer';
import UserHeader from '@/components/UserHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <UserHeader />
      <PageContainer scrollable>
        <main className="p-2 md:p-3 lg:p-5">{children}</main>
      </PageContainer>
    </>
  );
}
