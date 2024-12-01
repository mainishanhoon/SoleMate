import {
  CalendarCog,
  CalendarRange,
  GalleryThumbnails,
  UsersRound,
} from 'lucide-react';

export const AdminNavigationLinks = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: CalendarCog,
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: UsersRound,
  },
  {
    name: 'Products',
    href: '/dashboard/products',
    icon: CalendarRange,
  },
  {
    name: 'Banner',
    href: '/dashboard/banner',
    icon: GalleryThumbnails,
  },
];

export const UserNavigationLinks = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'All Products',
    href: '/products',
  },
  {
    name: 'Men',
    href: '/men',
  },
  {
    name: 'Women',
    href: '/women',
  },
];
