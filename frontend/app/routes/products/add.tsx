import {
  type ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router';
import { useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import {
  BRAND_OPTIONS,
  CATEGORY_OPTIONS,
  productSchema,
} from '@/schema/product';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { IconSelector } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Calendar as CalendarIcon,
  Dollar,
  TextSquare,
} from '@solar-icons/react-perf/BoldDuotone';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import UploadZone from '@/components/uploadZone';
import { SvgSpinnersBarsRotateFade } from '@/components/icons';
import { BASE_URL } from '@/lib/baseUrl';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const submission = parseWithZod(formData, { schema: productSchema });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { imageData, ...productData } = submission.value;

  const apiFormData = new FormData();

  const productBlob = new Blob([JSON.stringify(productData)], {
    type: 'application/json',
  });
  apiFormData.append('product', productBlob);

  const imageFile = formData.get('imageData');
  if (imageFile instanceof File) {
    apiFormData.append('imageFile', imageFile);
  }

  const response = await fetch(`${BASE_URL}/api/product/add`, {
    method: 'POST',
    body: apiFormData,
  });

  if (!response.ok) {
    return submission.reply({ formErrors: ['Failed to add product'] });
  }

  return redirect('/products');
}

export default function AddProduct() {
  const [date, setDate] = useState<Date>();
  const [resetKey, setResetKey] = useState(0);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      console.log('FormData entries:', Array.from(formData.entries()));
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: 'onBlur',
    constraint: getZodConstraint(productSchema),
  });

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <section className="font-bricolage flex w-full items-center justify-center p-4 lg:p-8">
      <Card className="lg:w-7xl" corner={true}>
        <CardContent className="grid gap-6 lg:grid-cols-2">
          <FieldGroup className="flex flex-col gap-2">
            <FieldLabel htmlFor={fields.imageData.id}>Image</FieldLabel>
            <UploadZone
              key={resetKey}
              meta={fields.imageData}
              className={
                fields.imageData.errors && 'outline-destructive outline'
              }
            />
            {fields.imageData.errors && (
              <FieldDescription className="text-destructive">
                {fields.imageData.errors}
              </FieldDescription>
            )}
          </FieldGroup>
          <Form
            method="post"
            id={form.id}
            onSubmit={form.onSubmit}
            onReset={handleReset}
            encType="multipart/form-data"
            noValidate
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor={fields.name.id}>Name</FieldLabel>
                <InputGroup
                  className={fields.name.errors && 'border-destructive'}
                >
                  <InputGroupInput
                    key={fields.name.key}
                    name={fields.name.name}
                    defaultValue={fields.name.defaultValue}
                    type="text"
                    placeholder="Enter Product Name..."
                  />
                  <InputGroupAddon>
                    <TextSquare />
                  </InputGroupAddon>
                </InputGroup>
                {fields.name.errors && (
                  <FieldDescription className="text-destructive">
                    {fields.name.errors}
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor={fields.description.id}>
                  Description
                </FieldLabel>
                <InputGroup
                  className={
                    fields.description.errors && 'border-destructive border'
                  }
                >
                  <InputGroupTextarea
                    key={fields.description.key}
                    name={fields.description.name}
                    defaultValue={fields.description.defaultValue}
                    placeholder="Write Description about product..."
                  />
                </InputGroup>
                {fields.description.errors && (
                  <FieldDescription className="text-destructive">
                    {fields.description.errors}
                  </FieldDescription>
                )}
              </Field>
              <div className="justify-between max-lg:space-y-4 lg:flex lg:gap-4">
                <Field>
                  <FieldLabel htmlFor={fields.price.id}>Price</FieldLabel>
                  <InputGroup
                    className={fields.price.errors && 'border-destructive'}
                  >
                    <InputGroupInput
                      id={fields.price.id}
                      name={fields.price.name}
                      defaultValue={fields.price.defaultValue}
                      type="number"
                      placeholder="Enter Price"
                    />
                    <InputGroupAddon>
                      <Dollar />
                    </InputGroupAddon>
                  </InputGroup>
                  {fields.price.errors && (
                    <FieldDescription className="text-destructive">
                      {fields.price.errors}
                    </FieldDescription>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="block-start-input">Category</FieldLabel>
                  <Select
                    key={fields.category.key}
                    name={fields.category.name}
                    defaultValue={fields.category.defaultValue}
                  >
                    <SelectTrigger
                      className={fields.category.errors && 'border-destructive'}
                    >
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORY_OPTIONS.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="font-bricolage"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fields.category.errors && (
                    <FieldDescription className="text-destructive">
                      {fields.category.errors}
                    </FieldDescription>
                  )}
                </Field>
              </div>
              <div className="justify-between max-lg:space-y-4 lg:flex lg:gap-4">
                <Field>
                  <FieldLabel htmlFor={fields.brand.id}>Brand</FieldLabel>
                  <Select key={fields.brand.key} name={fields.brand.name}>
                    <SelectTrigger
                      className={fields.brand.errors && 'border-destructive'}
                    >
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {BRAND_OPTIONS.map((brand) => (
                        <SelectItem
                          key={brand}
                          value={brand}
                          className="font-bricolage"
                        >
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fields.brand.errors && (
                    <FieldDescription className="text-destructive">
                      {fields.brand.errors}
                    </FieldDescription>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="block-start-input">
                    Release Date
                  </FieldLabel>
                  <InputGroup
                    className={
                      fields.releaseDate.errors && 'border-destructive border'
                    }
                  >
                    <InputGroupInput
                      type="hidden"
                      key={fields.releaseDate.key}
                      name={fields.releaseDate.name}
                      value={date ? date.toISOString() : ''}
                    />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          data-empty={!date}
                          className={cn(
                            'w-full justify-between text-left font-normal',
                            'data-[empty=true]:text-muted-foreground',
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <CalendarIcon />

                            {date ? (
                              format(date, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </span>
                          <IconSelector />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          defaultMonth={date}
                        />
                      </PopoverContent>
                    </Popover>
                  </InputGroup>

                  {fields.releaseDate.errors && (
                    <FieldDescription className="text-destructive">
                      {fields.releaseDate.errors}
                    </FieldDescription>
                  )}
                </Field>
              </div>
              <Field orientation="horizontal" className="justify-between">
                <Button type="reset" variant="outline" corner={true}>
                  Reset
                </Button>
                <Button type="submit" corner={true}>
                  {isSubmitting ? (
                    <span className="flex gap-2">
                      <SvgSpinnersBarsRotateFade /> Submitting...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
