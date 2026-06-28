import {
  GalleryAdd,
  Siren,
  TrashBinTrash,
} from '@solar-icons/react-perf/BoldDuotone';

import { useFileUpload } from '@/hooks/useFileUpload';
import type { Key } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  id: string;
  key: Key | null | undefined;
  formID: string;
  name: string;
  className?: string;
}

export default function UploadZone({
  id,
  formID,
  name,
  key,
  className,
}: Props) {
  const maxSize = Number(import.meta.env.VITE_MAX_FILE_SIZE) * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile: hookRemoveFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: 'image/*',
    maxSize,
  });

  const handleRemoveFile = (id: string) => {
    hookRemoveFile(id);
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  const previewUrl = files[0]?.preview || null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* Drop area */}
        <div
          className={cn(
            'border-input hover:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50 relative flex aspect-video min-h-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]',
            className,
          )}
          data-dragging={isDragging || undefined}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          role="button"
          tabIndex={-1}
        >
          <input
            {...getInputProps({ id, name })}
            key={key}
            multiple={false}
            form={formID}
            type="file"
            aria-label="Upload file"
            className="sr-only"
          />
          {previewUrl ? (
            <div className="absolute inset-0">
              <img
                alt={files[0]?.file?.name || 'Uploaded image'}
                className="size-full object-cover"
                src={previewUrl}
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
                JPEG, PNG, WEBP, GIF • Max size:{' '}
                {Number(import.meta.env.VITE_MAX_FILE_SIZE)}MB
              </p>
            </div>
          )}
        </div>
        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              aria-label="Remove image"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={(e) => {
                e.stopPropagation();
                // Use the new handler instead of the raw hook function
                handleRemoveFile(files[0]?.id);
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

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <Siren className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
