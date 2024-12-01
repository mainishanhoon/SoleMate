import { Column } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeClosed } from 'lucide-react';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div
        className={cn(
          'p-2 text-center text-lg font-bold tracking-wider',
          className,
        )}
      >
        {title}
      </div>
    );
  }

  return (
    <div className={cn('space-x-2 text-center tracking-wider', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span className="font-bold">{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDown strokeWidth={3} className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUp strokeWidth={3} className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown strokeWidth={3} className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp
              strokeWidth={3}
              className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            />
            <span>Asc</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown
              strokeWidth={3}
              className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            />
            <span>Desc</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeClosed
              strokeWidth={3}
              className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            />
            <span>Hide</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
