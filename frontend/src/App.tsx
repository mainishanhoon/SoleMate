import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home.tsx';
import ProductPage from '@/pages/product/index.tsx';
import ProductDetailPage from '@/pages/product/[id].tsx';

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ProductPage />} path="/products" />
      <Route element={<ProductDetailPage />} path="/product/:id" />
    </Routes>
  );
}

export default App;
