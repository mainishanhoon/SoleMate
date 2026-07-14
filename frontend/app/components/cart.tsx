import { Cart3, CloseSquare } from '@solar-icons/react-perf/BoldDuotone';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useCart } from '@/providers/CartProvider';
import type { Cart } from '@/types/cart';
import CartItemCard from '@/components/itemCard';

export default function CartDrawer() {
  const { cartItems, setCartItems } = useCart() as any;

  const totalAmount = cartItems.reduce(
    (acc: number, item: Cart) => acc + item.price * item.quantity,
    0,
  );

  const handleRemove = (productId: number | string): void => {
    const freshCart = cartItems.filter((item: Cart) => item.id !== productId);

    if (setCartItems) {
      setCartItems(freshCart);
    }

    localStorage.setItem('shopping_cart', JSON.stringify(freshCart));
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative">
          <Cart3 size={20} />
          {cartItems.length > 0 && (
            <span className="bg-background text-foreground absolute -top-1 -right-1 flex size-3 items-center justify-center text-xs font-bold">
              {cartItems.length}
            </span>
          )}
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-full">
        <DrawerHeader className="relative flex flex-row items-start justify-between border-b pt-5 pb-4">
          <div className="flex flex-col space-y-1 text-left">
            <DrawerTitle className="text-foreground text-xl font-bold tracking-tight">
              Your Cart
            </DrawerTitle>
            <DrawerDescription className="text-muted-foreground text-sm">
              Review your selected sneakers.
            </DrawerDescription>
          </div>

          <DrawerClose asChild>
            <CloseSquare size={22} className="hover:text-destructive cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 space-y-4 overflow-y-auto py-4 pr-1">
          {cartItems.length === 0 ? (
            <div className="flex h-[80dvh] flex-col items-center justify-center px-4">
              <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-neutral-50/80 ring-8 ring-neutral-50/30">
                <div className="absolute inset-0 [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />

                <span className="relative animate-bounce text-5xl [animation-duration:3s]">
                  <img alt="shoe" src="/Crocs.png" />
                </span>
              </div>

              <div className="max-w-xs space-y-2 text-center">
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  Your rotation is empty!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your cart feels light. Explore our freshly dropped exclusive
                  collections to level up your sneaker rotation.
                </p>
              </div>
            </div>
          ) : (
            cartItems.map((item: Cart) => (
              <CartItemCard key={item.id} item={item} onRemove={handleRemove} />
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <DrawerFooter className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Estimated Total:</span>
              <span>₹{totalAmount}</span>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
