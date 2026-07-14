import { TrashBinTrash } from '@solar-icons/react-perf/BoldDuotone';
import { type Cart } from '@/types/cart';

interface CartItemCardProps {
  item: Cart;
  onRemove: (id: number | string) => void;
}

export default function CartItemCard({ item, onRemove }: CartItemCardProps) {
  return (
    <div className="mx-2 flex items-center justify-between bg-muted rounded-lg border-2 border-dashed p-3 transition-colors duration-150">
      <div className="flex flex-col space-y-1">
        <span className="text-foreground text-sm font-semibold">
          {item.name}
        </span>
        <span className="text-muted-foreground text-xs font-medium italic">
          {item.brand}
        </span>
        <div className="text-shadow-muted flex items-center space-x-2 pt-1 text-xs">
          <span>
            Qty: <strong className="font-semibold">{item.quantity}</strong>
          </span>
          <span>•</span>
          <span>
            Price: <strong className="font-semibold">₹{item.price}</strong>
          </span>
        </div>
      </div>

      <TrashBinTrash
        onClick={() => onRemove(item.id)}
        className="cursor-pointer transition-colors duration-200 hover:text-red-500"
        aria-label={`Remove ${item.name} from cart`}
        size={25}
      />
    </div>
  );
}
