import { Outlet } from 'react-router';
import NavBar from '@/components/navigationBar';

export default function ProductsLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <NavBar />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
