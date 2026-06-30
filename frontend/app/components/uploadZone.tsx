import { getInputProps } from '@conform-to/react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { GalleryAdd, TrashBinTrash } from '@solar-icons/react-perf/BoldDuotone';

export default function UploadZone({
  meta,
  className,
}: {
  meta: any;
  className?: string;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // @ts-expect-error
  const { onChange, ...inputProps } = getInputProps(meta, { type: 'file' });

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          className={cn(
            'border-input hover:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50 relative flex aspect-video min-h-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]',
            className,
          )}
          onClick={() => inputRef.current?.click()}
          role="button"
        >
          <input
            {...inputProps}
            ref={(el) => {
              inputRef.current = el;
              // @ts-expect-error
              if (typeof inputProps.ref === 'function') {
                // @ts-expect-error
                inputProps.ref(el);
              }
            }}
            onChange={(e) => {
              // @ts-expect-error
              if (typeof inputProps.onChange === 'function') {
                // @ts-expect-error
                inputProps.onChange(e);
              }

              const file = e.target.files?.[0];
              if (file) {
                setPreview(URL.createObjectURL(file));
              } else {
                setPreview(null);
              }
            }}
            type="file"
            accept="image/*"
            className="sr-only"
          />

          {preview ? (
            <div className="absolute inset-0">
              <img
                alt="Preview"
                className="size-full object-cover"
                draggable={false}
                src={preview}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <GalleryAdd
                aria-hidden={true}
                className="mb-2 size-12 opacity-60 lg:size-20"
              />
              <p className="mb-1.5 text-sm font-medium lg:text-base">
                Drop your image here or click to browse
              </p>
              <p className="text-muted-foreground text-xs">
                JPEG, PNG, WEBP, GIF
              </p>
            </div>
          )}
        </div>

        {preview && (
          <div className="absolute top-4 right-4">
            <button
              aria-label="Remove image"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={(e) => {
                e.stopPropagation();

                setPreview(null);

                if (inputRef.current) {
                  inputRef.current.value = '';
                }
              }}
              type="button"
            >
              <TrashBinTrash
                aria-hidden="true"
                className="hover:text-destructive size-5"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
