import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { LogOut } from 'lucide-react';

interface UserProps {
  email: string;
  name: string;
  pfp: string;
}

export function UserDropdown({ email, name, pfp }: UserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-8 rounded-full border-2 sm:size-9"
        >
          <Avatar className="size-8 sm:size-9">
            <AvatarImage src={pfp} alt="User Image" />
            <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="flex flex-col space-y-1">
          <p className="text-sm font-bold tracking-wider">{name}</p>
          <p className="text-xs tracking-widest text-muted-foreground">
            {email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Dialog>
          <div className="rounded-sm bg-destructive px-3 py-1 text-white hover:bg-destructive/70">
            <DialogTrigger className="flex w-full items-center justify-center space-x-2">
              <LogOut strokeWidth={3} size={20} />
              <span className="font-bold tracking-wider">Log Out</span>
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
                <Button type="button" variant="destructive">
                  <LogoutLink>Log Out</LogoutLink>
                </Button>
              </DialogFooter>
            </DialogContent>
          </div>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
