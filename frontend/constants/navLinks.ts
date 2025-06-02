import {
  IconClipboardList,
  IconClock,
  IconDashboard,
  IconHome,
  IconLibraryPlus,
} from '@tabler/icons-react';

export const navigationLink = {
  navMain: [
    {
      title: 'Home',
      url: '/home',
      icon: IconHome,
    },
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'My Items',
      url: '/home/myItems',
      icon: IconClipboardList,
    },
    {
      title: 'Past Items',
      url: '/home/pastItems',
      icon: IconClock,
    },
    {
      title: 'Add Item',
      url: '/home/addItem',
      icon: IconLibraryPlus,
    },
  ],
};

export const heroNavigationLink = [
  {
    name: 'Home',
    href: 'Hero',
  },
  {
    name: 'Features',
    href: 'Features',
  },
  {
    name: 'Testimonials',
    href: 'Testimonials',
  },
];
