'use client';

import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { DataTableFacetedFilter } from './FacetedFilter';
import { CalendarDatePicker } from '@/components/CalendarDatePicker';
import { useState } from 'react';
import { DataTableViewOptions } from './ViewOptions';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  });

  const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
    setDateRange({ from, to });
    // Filter table data based on selected date range
    table.getColumn('createdAt')?.setFilterValue([from, to]);
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Name..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) => {
            table.getColumn('title')?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <CalendarDatePicker
          date={dateRange}
          onDateSelect={handleDateSelect}
          className="h-8 w-[250px] border-dashed border-input"
          variant="outline"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
