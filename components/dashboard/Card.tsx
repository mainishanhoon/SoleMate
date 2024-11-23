import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ReactNode } from 'react';
import {
  Archive,
  BadgeIndianRupee,
  CircleUserRound,
  ShoppingBag,
} from 'lucide-react';

interface DashboardCardProps {
  title: string;
  unit?: string;
  amount: number;
  description: string;
  icon: ReactNode;
}

function DashboardCard({
  title,
  unit,
  amount,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <Card className="relative w-full sm:max-w-sm">
      <CardHeader className="relative z-10 space-y-0">
        <CardTitle className="text-xl tracking-wider">{title}</CardTitle>
        <CardDescription className="font-mont text-xs font-bold">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <Label className="rounded-2xl bg-muted-foreground/30 px-3 py-1 font-sans text-2xl font-bold">
          {unit}
          <span>{amount.toLocaleString()}</span>
        </Label>
      </CardContent>
      <div className="absolute left-2/3 top-1/2 -translate-y-1/2 transform rounded-full bg-primary/20 p-3">
        {icon}
      </div>
    </Card>
  );
}

export default function StatsCard() {
  return (
    <>
      <DashboardCard
        title="Total Revenue"
        unit="₹"
        amount={24567}
        description="Since last 28 Days"
        icon={
          <BadgeIndianRupee
            size={45}
            strokeWidth={2}
            color="hsl(var(--primary))"
          />
        }
      />
      <DashboardCard
        title="Total Sales"
        amount={4567}
        description="Total Products Sold"
        icon={
          <ShoppingBag
            size={45}
            strokeWidth={2.5}
            color="hsl(var(--primary))"
            className="p-0.5"
          />
        }
      />
      <DashboardCard
        title="Total Products"
        amount={36}
        description="Available Products"
        icon={
          <Archive
            size={45}
            strokeWidth={2.5}
            color="hsl(var(--primary))"
            className="p-0.5"
          />
        }
      />
      <DashboardCard
        title="Total Users"
        amount={567}
        description="Signed Up Users"
        icon={
          <CircleUserRound
            size={45}
            strokeWidth={2}
            color="hsl(var(--primary))"
          />
        }
      />
    </>
  );
}
