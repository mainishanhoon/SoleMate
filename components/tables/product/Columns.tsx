'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Product } from '@/lib/schema';
import { DataTableColumnHeader } from './ColumnHeader';
import { DataTableRowActions } from './RowActions';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden size-0 p-0"
        column={column}
        title="ID"
      />
    ),
    cell: ({ row }) => {
      return <span className="hidden size-0 p-0">{row.getValue('id')}</span>;
    },
  },
  {
    accessorKey: 'images',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="-ml-8 w-full"
        column={column}
        title="Image"
      />
    ),
    cell: ({ row }) => {
      const images = row.getValue('images') as string[];
      const imageUrl = images?.[0];

      <div className="-ml-2 w-full">
        <Image
          alt="Product Image"
          src={imageUrl}
          height={100}
          width={100}
          className="size-20 rounded-md object-cover"
        />
      </div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex w-full justify-start"
        column={column}
        title="Name"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="-ml-1">
          <span className="w-full truncate font-bold capitalize tracking-widest">
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
        <div className="flex justify-center">
          <span className="-ml-2 w-24 font-bold capitalize tracking-widest">
            {row.getValue('category')}
          </span>
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
        className="-ml-1 w-full"
        column={column}
        title="Status"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <span className="-mr-2 w-24 font-bold capitalize tracking-widest">
            {row.getValue('status')}
          </span>
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
      <DataTableColumnHeader
        className="-ml-4 w-full"
        column={column}
        title="Price"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          ₹
          <span className="w-24 font-bold capitalize tracking-widest">
            {row.getValue('price')}
          </span>
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
        className="w-full"
        column={column}
        title="Featured"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Switch
            checked={row.getValue('isFeatured')}
            className="-ml-8 focus:ring-2 focus:ring-offset-2"
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
        <div className="flex justify-center">
          <span className="w-28 font-bold capitalize tracking-widest">
            {formattedDate}
          </span>
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
