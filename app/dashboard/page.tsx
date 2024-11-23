import StatsCard from '@/components/dashboard/Card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-2 md:gap-3 lg:gap-5">
      <div className="container mx-auto grid gap-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5">
        <StatsCard />
      </div>
      <div className="container mx-auto grid gap-2 md:gap-3 lg:grid-cols-3 lg:gap-5">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-xl tracking-wider">
              Transactions
            </CardTitle>
            <CardDescription className="font-mont font-bold">
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5"></CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-xl tracking-wider">
              Recent Sales
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 items-center sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 font-mont font-bold tracking-wide">
                <p className="pl-1 text-sm font-bold">Lorem Ipsum</p>
                <p className="rounded-full bg-muted-foreground/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                  loremipsum@email.com
                </p>
              </div>
              <p className="ml-auto font-bold tracking-wider">+₹1,999.56</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 items-center sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 font-mont font-bold tracking-wide">
                <p className="pl-1 text-sm font-bold">Lorem Ipsum</p>
                <p className="rounded-full bg-muted-foreground/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                  loremipsum@email.com
                </p>
              </div>
              <p className="ml-auto font-bold tracking-wider">+₹1,999.56</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 items-center sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 font-mont font-bold tracking-wide">
                <p className="pl-1 text-sm font-bold">Lorem Ipsum</p>
                <p className="rounded-full bg-muted-foreground/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                  loremipsum@email.com
                </p>
              </div>
              <p className="ml-auto font-bold tracking-wider">+₹1,999.56</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 items-center sm:flex">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 font-mont font-bold tracking-wide">
                <p className="pl-1 text-sm font-bold">Lorem Ipsum</p>
                <p className="rounded-full bg-muted-foreground/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                  loremipsum@email.com
                </p>
              </div>
              <p className="ml-auto font-bold tracking-wider">+₹1,999.56</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
