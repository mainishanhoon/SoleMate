'use client';

import { CreateProductAction } from '@/lib/actions';
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
import { ChevronLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { ProductSchema } from '@/lib/schema';
import { useActionState, useState } from 'react';
import Image from 'next/image';
import { SubmitButton } from '@/components/SubmitButton';
import { toast } from 'sonner';
import { Category, ProductStatus } from '@prisma/client';

export default function ProductCreationForm() {
  const [images, setImages] = useState<string[]>([]);

  const [lastResult, formAction] = useActionState(CreateProductAction, null);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProductSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    toast.info('Image has been Deleted');
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
              <div className="grid gap-5 sm:grid-cols-2">
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

                  <p className="-mt-2 ml-3 font-mont text-destructive">
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
                  <p className="-mt-2 ml-3 font-mont text-destructive">
                    {fields.description.errors}
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label>Price</Label>
                  <Input
                    key={fields.price.key}
                    name={fields.price.name}
                    defaultValue={fields.price.initialValue}
                    type="number"
                    placeholder="$55"
                  />
                  <p className="-mt-2 ml-3 font-mont text-destructive">
                    {fields.price.errors}
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <Label className="text-nowrap">Featured Product</Label>
                    <Switch
                      key={fields.isFeatured.key}
                      name={fields.isFeatured.name}
                      defaultValue={fields.isFeatured.initialValue}
                      className="ml-3"
                    />
                    <p className="-mt-2 ml-3 font-mont text-destructive">
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
                      {Object.values(ProductStatus).map((status) => (
                        <SelectItem
                          key={status}
                          value={status}
                          className="font-bold"
                        >
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="-mt-2 ml-3 font-mont text-destructive">
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
                    <SelectContent>
                      {Object.values(Category).map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="font-bold"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="-mt-2 ml-3 font-mont text-destructive">
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
                  <div className="mx-auto flex flex-wrap justify-center gap-5 rounded-lg bg-background p-5">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={image}
                          alt="Product Image"
                          width={200}
                          height={200}
                          className="size-24 rounded-lg border-2 border-muted-foreground bg-muted object-cover md:size-32"
                        />

                        <Button
                          className="absolute inset-x-0 inset-y-[72px] h-6 w-24 rounded-t-none border-2 border-t-0 border-muted-foreground bg-red-700 hover:bg-red-800 md:inset-y-24 md:h-8 md:w-32"
                          variant="destructive"
                          onClick={() => handleDelete(index)}
                          type="button"
                        >
                          <Trash2
                            strokeWidth={3}
                            className="mr-1 hidden size-4 md:block"
                          />
                          <p className="font-bold tracking-wide">Delete</p>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    appearance={{
                      container:
                        'capitalize border-muted-foreground font-bold font-mont tracking-wide border-2 bg-background sm:w-[550px] md:w-[650px]',
                    }}
                    onClientUploadComplete={(res) => {
                      setImages(res.map((r) => r.url));
                      toast.success('Image has been Uploaded');
                    }}
                    onUploadError={(error) => {
                      toast.error(error.message);
                    }}
                  />
                )}
                <p className="-mt-2 ml-3 font-mont text-destructive">
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
