
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';

import { redirect } from 'next/navigation';
import fetchUser from '@/lib/hooks';

export default async function BagRoute() {
  noStore();
  const user = await fetchUser();

  if (!user) {
    redirect('/');
  }


  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="mx-auto mt-10 min-h-[55vh] max-w-2xl">
      {!cart || !cart.items ? (
        <div className="mt-20 flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            You dont have any products in your Bag
          </h2>
          <p className="mx-auto mb-8 mt-2 max-w-sm text-center text-sm leading-6 text-muted-foreground">
            You currently dont have any products in your shopping bag. Please
            add some so that you can see them right here.
          </p>

          <Button asChild>
            <Link href="/">Shop Now!</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-10">
          {cart?.items.map((item) => (
            <div key={item.id} className="flex">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32">
                <Image
                  className="rounded-md object-cover"
                  fill
                  src={item.imageString}
                  alt="Product image"
                />
              </div>
              <div className="ml-5 flex w-full justify-between font-medium">
                <p>{item.name}</p>
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center gap-x-2">
                    <p>{item.quantity} x</p>
                    <p>${item.price}</p>
                  </div>

                  <form action={delItem} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteItem />
                  </form>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-10">
            <div className="flex items-center justify-between font-medium">
              <p>Subtotal:</p>
              <p>${new Intl.NumberFormat('en-US').format(totalPrice)}</p>
            </div>

            <form action={checkOut}>
              <ChceckoutButton />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
