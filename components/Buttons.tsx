'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
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
