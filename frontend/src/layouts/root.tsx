import { ReactNode } from 'react';

import Navbar from '@/components/navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-bricolage relative flex h-screen flex-col font-medium">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
        {children}
      </main>
    </div>
  );
}
