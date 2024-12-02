'use client';

import { CreateBanner } from '@/lib/actions';
import { SubmitButton } from '@/components/SubmitButtons';
import { UploadDropzone } from '@/lib/uploadthing';
import { BannerSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { ChevronLeft, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import Form from 'next/form';
import { toast } from 'sonner';

export default function BannerCreation() {
  const [image, setImages] = useState<string | undefined>(undefined);
  const [lastResult, formAction] = useActionState(CreateBanner, null);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: BannerSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <Form id={form.id} onSubmit={form.onSubmit} action={formAction}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/banner">
            <ChevronLeft size={25} strokeWidth={3} />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-wider">New Banner</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-xl tracking-wider">
            Banner Details
          </CardTitle>
          <CardDescription className="font-bold tracking-wider">
            In this form you can create your banner
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-5">
            <div className="flex flex-col gap-3">
              <Label>Title</Label>
              <Input
                type="text"
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                className="w-full"
                placeholder="Product Name"
              />

              <p className="-mt-2 ml-3 font-mont text-destructive">
                {fields.title.errors}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Label>Images</Label>
              <Input
                type="hidden"
                value={image ?? ''}
                key={fields.imageString.key}
                name={fields.imageString.name}
                defaultValue={fields.imageString.initialValue as string}
              />
              {image !== undefined ? (
                <div className="mx-auto flex flex-wrap justify-center gap-5 rounded-lg bg-background p-5">
                  <div className="relative">
                    <Image
                      src={image}
                      alt="Product Image"
                      width={800}
                      height={800}
                      loading="lazy"
                      className="aspect-video rounded-lg border-2 border-muted-foreground bg-muted object-cover"
                    />
                  </div>
                </div>
              ) : (
                <UploadDropzone
                  endpoint="bannerImageUploader"
                  appearance={{
                    container:
                      'capitalize border-muted-foreground font-bold font-mont tracking-wide border-2 bg-background sm:w-[550px] md:w-[650px]',
                  }}
                  onClientUploadComplete={(res) => {
                    setImages(res[0].url);
                    toast.success('Image has been Uploaded');
                  }}
                  onUploadError={(error) => {
                    toast.error(error.message);
                  }}
                />
              )}
              <p className="-mt-2 ml-3 font-mont text-destructive">
                {fields.imageString.errors}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <SubmitButton text="Create Banner" />
        </CardFooter>
      </Card>
    </Form>
  );
}
