'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ButtonProps {
  text: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'ringHover'
    | null
    | undefined;
  className?: string;
  toastMessage?: string;
}

export function SubmitButton({
  text,
  variant,
  className,
  toastMessage,
}: ButtonProps) {
  const { pending } = useFormStatus();

  const handleClick = () => {
    setTimeout(() => {
      if (toastMessage) {
        toast.info(toastMessage);
      }
    }, 2000);
  };

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn('w-fit', className)}>
          <Loader className="mr-2 size-4 animate-spin [animation-duration:3s]" />
          Please Wait...
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn('w-fit tracking-widest', className)}
          onClick={handleClick}
        >
          {text}
        </Button>
      )}
    </>
  );
}
