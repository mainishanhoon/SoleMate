'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Banner } from '@/lib/schema';
import { DataTableColumnHeader } from './ColumnHeader';
import { DataTableRowActions } from './RowActions';
import Image from 'next/image';

export const columns: ColumnDef<Banner>[] = [
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
    accessorKey: 'imageString',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex max-w-sm justify-start"
        column={column}
        title="Image"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="-ml-2 max-w-sm">
          <Image
            alt="Product Image"
            src={row.getValue('imageString')}
            height={100}
            width={150}
            priority
            className="aspect-video rounded-md object-cover"
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex w-full justify-start"
        column={column}
        title="Title"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full">
          <span className="truncate font-bold capitalize tracking-widest">
            {row.getValue('title')}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
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
