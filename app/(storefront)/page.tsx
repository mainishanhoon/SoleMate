import BannerCarousel from '@/components/storefront/BannerCarousel';
import Categories from '@/components/storefront/Category';
import { FeaturedProducts } from '@/components/storefront/Featured';

export default function StoreFront() {
  return (
    <section>
      <BannerCarousel />
      <Categories />
      <FeaturedProducts />
    </section>
  );
}
