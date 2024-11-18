'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader, LoaderCircle, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

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
}

export function DeleteButton(onClick: Function) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="absolute inset-x-0 inset-y-24 h-8 w-32 opacity-0 transition-opacity group-hover:opacity-100"
      variant="destructive"
      disabled={pending}
    >
      {pending ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <>
          <Trash2 strokeWidth={3} className="mr-1 size-4" />
          <p className="font-bold tracking-wide">Delete</p>
        </>
      )}
    </Button>
  );
}

export function SubmitButton({ text, variant, className }: ButtonProps) {
  const { pending } = useFormStatus();

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
        >
          {text}
        </Button>
      )}
    </>
  );
}
