import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import prisma from '@/lib/db';
import Image from 'next/image';

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function BannerCarousel() {
  const data = await getData();

  return (
    <Carousel>
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[15vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh]">
              <Image
                alt="Banner Image"
                src={item.imageString}
                fill
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="absolute left-6 top-6 rounded-xl bg-black bg-opacity-75 p-5 text-white shadow-lg transition-transform hover:scale-105">
                <h1 className="text-xl font-bold lg:text-4xl">{item.title}</h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
}
