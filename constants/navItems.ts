import { CalendarCog, CalendarRange, Cog, UsersRound } from 'lucide-react';

export const NavigationLinks = [
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
    name: 'Categories',
    href: '/dashboard/categories',
    icon: Cog,
  },
];
