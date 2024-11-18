import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from '@/components/Providers';
import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { fileRouter } from '@/app/api/uploadthing/core';

const montserrat = localFont({
  src: './fonts/Montserrat.woff2',
  variable: '--font-montserrat',
  weight: '1200',
});

const hubotSans = localFont({
  src: './fonts/HubotSans.woff2',
  variable: '--font-hubotSans',
  weight: '1200',
});

export const metadata: Metadata = {
  title: 'SoleMate',
  description: 'Made by @mainishanhoon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.variable} ${hubotSans.className} overflow-hidden`}
        suppressHydrationWarning
      >
        <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
