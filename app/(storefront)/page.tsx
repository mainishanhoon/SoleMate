import BannerCarousel from '@/components/storefront/BannerCarousel';
import Categories from '@/components/storefront/Category';
import { FeaturedProducts } from '@/components/storefront/Featured';

export default function StoreFront() {
  return (
    <section className="flex flex-col space-y-12">
      <BannerCarousel />
      <Categories />
      <FeaturedProducts />
    </section>
  );
}
