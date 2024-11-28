import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Copy, Ellipsis, Pen, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function Actions({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex size-8 p-0 hover:bg-muted-foreground/20 data-[state=open]:bg-muted-foreground/20"
          >
            <Ellipsis className="size-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20" align="center">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={`dashboard/products/${params.id}`}>
                <Pen strokeWidth={3} size={15} />
                <span>Edit</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy strokeWidth={3} size={15} />
              <span>Copy</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="#" className="bg-destructive text-white">
              <Trash2 strokeWidth={3} size={15} />
              <span>Delete</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
