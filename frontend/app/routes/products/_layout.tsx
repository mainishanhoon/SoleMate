import { Outlet } from 'react-router';
import NavBar from '@/components/navigationBar';

export default function ProductsLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
