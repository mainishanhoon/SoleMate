import { Outlet } from 'react-router';
import NavBar from '@/components/navigationBar';
import { CartProvider } from '@/providers/CartProvider';
import { Toaster } from 'sonner';
import { useTheme } from 'next-themes';

export default function ProductsLayout() {
  const { theme = 'system' } = useTheme();

  return (
    <CartProvider>
      <div className="flex min-h-dvh flex-col">
        <NavBar />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Toaster
        theme={theme as 'light' | 'dark' | 'system'}
        position="top-center"
        richColors
      />
    </CartProvider>
  );
}
