'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="my-2 text-4xl font-bold tracking-wider">
        Something&apos;s missing
      </h2>
      <p className="tracking-wider">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mt-8 flex justify-center gap-5">
        <Button
          onClick={() => router.back()}
          variant="default"
          size="lg"
          className="p-4"
        >
          Go back
        </Button>
        <Button
          onClick={() => router.push('/dashboard')}
          variant="outline"
          size="lg"
          className="p-4"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
