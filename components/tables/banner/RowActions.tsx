'use client';

import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Form from 'next/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '@/components/SubmitButton';
import { DeleteBanner } from '@/lib/actions';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const id = row.getValue('id');

  return (
    <div className="flex justify-center" suppressHydrationWarning={true}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex size-8 bg-muted p-0 hover:bg-muted-foreground/20 data-[state=open]:bg-muted-foreground/20"
          >
            <Ellipsis strokeWidth={3} size={20} />
            <span className="sr-only">Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20" align="center">
          <DropdownMenuItem asChild>
            <Dialog>
              <div className="rounded-sm bg-destructive px-3 py-1 text-white hover:bg-destructive/70">
                <DialogTrigger className="flex items-center space-x-2">
                  <Trash2 strokeWidth={3} size={15} />
                  <span>Delete</span>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl tracking-wide">
                      Are you absolutely sure?
                    </DialogTitle>
                    <DialogDescription className="text-sm font-bold tracking-wider">
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild className="mr-auto">
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Form action={DeleteBanner}>
                      <Input
                        type="hidden"
                        name="bannerId"
                        value={row.getValue('id')}
                      />
                      <SubmitButton
                        variant="destructive"
                        text="Delete Product"
                        toastMessage="Banner has been Removed"
                      />
                    </Form>
                  </DialogFooter>
                </DialogContent>
              </div>
            </Dialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
