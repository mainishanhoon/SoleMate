'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Product } from '@/lib/schema';
import { DataTableColumnHeader } from './ColumnHeader';
import { DataTableRowActions } from './RowActions';
import Image from 'next/image';
import { Switch } from '../ui/switch';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'images',
    header: ({ column }) => (
      <DataTableColumnHeader className="w-full" column={column} title="Image" />
    ),
    cell: ({ row }) => {
      const images = row.getValue('images') as string[];
      const imageUrl = images?.[0];

      return imageUrl ? (
        <div className="flex w-full justify-center">
          <Image
            alt="Product Image"
            src={imageUrl}
            height={100}
            width={100}
            className="size-16 rounded-md object-cover"
          />
        </div>
      ) : (
        <div>No Image</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader className="w-full" column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-center">
          <span className="max-w-md truncate capitalize">
            {row.getValue('name')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-full"
        column={column}
        title="Category"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-center">
          <span className="w-24 capitalize"> {row.getValue('category')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-full"
        column={column}
        title="Status"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-center">
          <span className="w-24 capitalize"> {row.getValue('status')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader className="w-full" column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-center">
          ₹
          <span className="-mr-8 w-24 capitalize">{row.getValue('price')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'isFeatured',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-full text-lg"
        column={column}
        title="Featured"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-center">
          <Switch
            checked={row.getValue('isFeatured')}
            className="-ml-6 focus:ring-2 focus:ring-offset-2"
          />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-full"
        column={column}
        title="Created At"
      />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
      const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      return (
        <div className="flex w-full justify-center">
          <span className="w-28 capitalize">{formattedDate}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const rowDate = new Date(row.getValue(id));
      const [startDate, endDate] = value;
      return rowDate >= startDate && rowDate <= endDate;
    },
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
