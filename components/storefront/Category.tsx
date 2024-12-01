'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  ArrowRight,
  ChevronsRight,
  CircleChevronRight,
  MoveRight,
} from 'lucide-react';
import { useState } from 'react';

interface CategoryCards {
  imageSrc: string;
  link: string;
  text: string;
}

export default function Categories() {
  return (
    <div className="px-4 py-24 sm:py-32">
      <div className="flex items-center justify-between max-sm:flex-col">
        <h2 className="text-2xl font-bold tracking-wider md:text-4xl">
          Shop by Category
        </h2>

        <Link
          className="group text-sm font-semibold text-primary hover:text-primary/80"
          href="/products/all"
        >
          <Button variant="linkHover2" size="lg">
            <div className="flex items-center tracking-wider sm:text-lg">
              Browse All Products
              <span className="relative ml-2 flex h-4 w-4 items-center">
                <ArrowRight
                  strokeWidth={3}
                  color="hsl(var(--primary))"
                  className="absolute inset-0 -mt-0.5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0"
                />
                <MoveRight
                  strokeWidth={3}
                  color="hsl(var(--primary))"
                  className="absolute inset-0 -mt-0.5 -translate-x-full transform opacity-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                />
              </span>
            </div>
          </Button>
        </Link>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <CatergoryCard
          imageSrc="/all.webp"
          link="/products/all"
          text="All Products"
        />
        <CatergoryCard imageSrc="/kids.webp" link="/products/all" text="Kids" />
        <CatergoryCard imageSrc="/men.webp" link="/products/all" text="Men" />
        <CatergoryCard
          imageSrc="/women.webp"
          link="/products/all"
          text="Women"
        />
        <CatergoryCard
          imageSrc="/elder.webp"
          link="/products/all"
          text="Elders"
        />
      </div>
    </div>
  );
}

export function CatergoryCard({ imageSrc, link, text }: CategoryCards) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative justify-center"
    >
      <Link href={link}>
        <div className="relative">
          <Image
            src={imageSrc}
            loading="lazy"
            alt={imageSrc}
            width={1000}
            height={1000}
            className="h-[400px] rounded-xl object-cover object-center sm:w-full"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
          <div className="absolute inset-0 flex items-end p-6">
            <p className="flex flex-col">
              <span className="font-semibold tracking-widest text-white">
                {text}
              </span>
              <span className="mt-1 flex items-center text-sm tracking-wider text-white">
                Shop Now
              </span>
            </p>
            <div
              className={`absolute bottom-5 right-5 flex size-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 ${
                hovered ? 'translate-x-2' : 'translate-x-0'
              }`}
            >
              {hovered ? (
                <ChevronsRight
                  size={30}
                  color="hsl(var(--primary))"
                  strokeWidth={2.5}
                />
              ) : (
                <CircleChevronRight
                  size={30}
                  color="hsl(var(--primary))"
                  strokeWidth={2.5}
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
