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
    href: '/',
  },
  {
    name: 'All Products',
    href: '/products/all',
  },
  {
    name: 'Kids',
    href: '/products/kids',
  },
  {
    name: 'Men',
    href: '/products/men',
  },
  {
    name: 'Women',
    href: '/products/women',
  },
  {
    name: 'Elder',
    href: '/products/elder',
  },
];
