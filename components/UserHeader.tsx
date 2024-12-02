import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CircleUserRound, Volleyball } from 'lucide-react';
import ThemeToggle from '@/components/ThemeSwitcher';
import { UserNavBar } from '@/components/NavBar';
import Bag from '@/components/Bag';
import { UserDropdown } from '@/components/UserDropDown';
import fetchUser from '@/lib/hooks';

export default async function UserHeader() {
  const user = await fetchUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background px-2 py-1 sm:px-4">
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
                <UserNavBar />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="flex max-md:hidden">
          <UserNavBar />
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-5">
          <Bag />
          <ThemeToggle />
          {user ? (
            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              pfp={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          ) : (
            <CircleUserRound
              size={35}
              className="rounded-full bg-primary p-1 text-white"
            />
          )}
        </div>
      </div>
    </header>
  );
}
