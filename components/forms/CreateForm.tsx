'use client';

import { createProductAction } from '@/lib/actions';
import { UploadDropzone } from '@/lib/uploadthing';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Form from 'next/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from '@/utils/schema';
import { useActionState, useState } from 'react';
import Image from 'next/image';
import { SubmitButton } from '@/components/Buttons';
import { toast } from 'sonner';
import PageContainer from '../PageContainer';

export default function ProductCreationForm() {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, formAction] = useActionState(createProductAction, null);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <Form id={form.id} onSubmit={form.onSubmit} action={formAction}>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft size={25} strokeWidth={3} />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-wider">New Product</h1>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <CardTitle className="text-xl tracking-wider">
              Product Details
            </CardTitle>
            <CardDescription className="font-bold tracking-wider">
              In this form you can create your product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-3">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    key={fields.name.key}
                    name={fields.name.name}
                    defaultValue={fields.name.initialValue}
                    className="w-full"
                    placeholder="Product Name"
                  />

                  <p className="font-mont -mt-2 ml-3 text-destructive">
                    {fields.name.errors}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Description</Label>
                  <Textarea
                    key={fields.description.key}
                    name={fields.description.name}
                    defaultValue={fields.description.initialValue}
                    placeholder="Write your description right here..."
                  />
                  <p className="font-mont -mt-2 ml-3 text-destructive">
                    {fields.description.errors}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-3">
                  <Label>Price</Label>
                  <Input
                    key={fields.price.key}
                    name={fields.price.name}
                    defaultValue={fields.price.initialValue}
                    type="number"
                    placeholder="$55"
                  />
                  <p className="font-mont -mt-2 ml-3 text-destructive">
                    {fields.price.errors}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-3">
                    <Label>Featured Product</Label>
                    <Switch
                      key={fields.isFeatured.key}
                      name={fields.isFeatured.name}
                      defaultValue={fields.isFeatured.initialValue}
                      className="ml-3"
                    />
                    <p className="font-mont -mt-2 ml-3 text-destructive">
                      {fields.isFeatured.errors}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label>Status</Label>
                  <Select
                    key={fields.status.key}
                    name={fields.status.name}
                    defaultValue={fields.status.initialValue}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="font-mont -mt-2 ml-3 text-destructive">
                    {fields.status.errors}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Label>Category</Label>
                  <Select
                    key={fields.category.key}
                    name={fields.category.name}
                    defaultValue={fields.category.initialValue}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    {/* <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent> */}
                  </Select>
                  <p className="font-mont -mt-2 ml-3 text-destructive">
                    {fields.category.errors}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Label>Images</Label>
                <input
                  type="hidden"
                  value={images}
                  key={fields.images.key}
                  name={fields.images.name}
                  defaultValue={fields.images.initialValue as any}
                />
                {images.length > 0 ? (
                  <div className="flex gap-5">
                    {images.map((image, index) => (
                      <div key={index} className="relative h-[100px] w-[100px]">
                        <Image
                          height={100}
                          width={100}
                          src={image}
                          alt="Product Image"
                          className="h-full w-full rounded-lg border object-cover"
                        />

                        <button
                          onClick={() => handleDelete(index)}
                          type="button"
                          className="absolute -right-3 -top-3 rounded-lg bg-red-500 p-2 text-white"
                        >
                          <XIcon className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    appearance={{
                      container:
                        'capitalize border-muted-foreground font-bold font-mont tracking-wide border-2 bg-background w-[650px]',
                    }}
                    onClientUploadComplete={() => {
                      toast.success('Profile Image Uploaded');
                    }}
                    onUploadError={(error: any) => {
                      toast.error(error.message);
                    }}
                  />
                )}

                <p className="font-mont -mt-2 ml-3 text-destructive">
                  {fields.images.errors}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <SubmitButton text="Create Product" />
          </CardFooter>
        </Card>
      </Form>
    </>
  );
}
