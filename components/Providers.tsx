'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return <KindeProvider>{children}</KindeProvider>;
}
