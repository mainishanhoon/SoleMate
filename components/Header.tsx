'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CircleUser, LogOut, Volleyball } from 'lucide-react';
import ThemeToggle from '@/components/ThemeSwitcher';
import NavBar from '@/components/NavBar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b-2 bg-background px-2 py-1 sm:px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="mx-auto flex items-center gap-2 text-2xl font-black max-md:hidden"
          >
            <Volleyball
              size={35}
              className="rounded-lg bg-primary p-1 text-white"
            />
            <p className="font-bold tracking-wider">
              Sole
              <span className="tracking-wider text-primary">Mate</span>
            </p>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex cursor-pointer items-center space-x-2 md:hidden">
                <Volleyball
                  size={35}
                  className="rounded-lg bg-primary p-1 text-white"
                />
                <p className="text-2xl font-bold tracking-wider">
                  Sole
                  <span className="tracking-wider text-primary">Mate</span>
                </p>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-70 flex flex-col">
              <SheetTitle>
                <Link
                  href="/"
                  className="mx-auto mt-5 flex items-center gap-2 text-2xl font-black"
                >
                  <Volleyball
                    size={35}
                    className="rounded-full bg-primary p-1 text-white"
                  />
                  <p className="font-prompt font-bold tracking-wider">
                    Sole
                    <span className="tracking-wider text-primary">Mate</span>
                  </p>
                </Link>
              </SheetTitle>
              <nav className="mt-2 grid gap-2">
                <NavBar />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="flex max-md:hidden">
          <NavBar />
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-5">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser size={25} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="tracking-wide">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogoutLink className="flex cursor-pointer items-center justify-center space-x-1 bg-destructive/20">
                  <LogOut size={15} strokeWidth={3} />
                  <p className="font-bold tracking-wide">Sign Out</p>
                </LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
