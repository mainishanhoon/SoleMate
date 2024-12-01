import {
  Dialog,
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
import { DeleteProduct } from '@/lib/actions';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center space-x-2">
        <Trash2 strokeWidth={3} size={15} />
        <span>Delete</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogFooter className="flex w-full justify-between">
        <Button
          variant="outline"
          className="hover:bg-muted-foreground/20"
          asChild
        >
          <Link href="/dashboard/products">
            <span>Cancel</span>
          </Link>
        </Button>
        <Form action={DeleteProduct}>
          <Input type="hidden" name="productId" value={row.getValue('id')} />
          <SubmitButton variant="destructive" text="Delete Product" />
        </Form>
      </DialogFooter>
    </Dialog>
  );
}
