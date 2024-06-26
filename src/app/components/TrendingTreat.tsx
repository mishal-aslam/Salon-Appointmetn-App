import React from "react";
import Image from "next/image";
import Img1 from '../../../public/image 1.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define a type for the item object
type Item = {
  id: number;
  image: string; 
  title: string;
  text: string;
};

const items: Item[] = [
  { id: 1, image: Img1.src, title: "Item 1", text: "Lorem ipsum dolor sit." },
  { id: 2, image: Img1.src, title: "Item 2", text: "Lorem ipsum dolor sit." },
  { id: 3, image: Img1.src, title: "Item 3", text: "Lorem ipsum dolor sit." },
  { id: 4, image: Img1.src, title: "Item 4", text: "Lorem ipsum dolor sit." },
  { id: 5, image: Img1.src, title: "Item 5", text: "Lorem ipsum dolor sit." },
  { id: 6, image: Img1.src, title: "Item 6", text: "Lorem ipsum dolor sit." },
  { id: 7, image: Img1.src, title: "Item 7", text: "Lorem ipsum dolor sit." },
];

const TrendingTreat: React.FC = () => {
  return (
    <div className="md:my-24 my-10 flex justify-center items-center">
      <div className="w-full px-28">
        <h1 className="text-secondary font-medium text-5xl text-center mb-8">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-secondary font-medium text-2xl text-center mb-8">
          Lorem, elit. quas nobis Facilis necessitatibus voluptas architecto corporis. Possimus!
        </p>

        <Carousel className="relative">
          <CarouselPrevious className="absolute -left-16 top-1/2 text-secondary transform -translate-y-1/2 bg-primary h-16 w-16 p-4 rounded-full flex items-center justify-center">
            <IoIosArrowBack size={24} />
          </CarouselPrevious>
          <CarouselContent className="flex space-x-4 overflow-hidden">
            {items.map((item) => (
              <CarouselItem 
                key={item.id} 
                className="flex-none basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="text-center relative">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="rounded-3xl"
                    />
                    <div className="absolute top-0 right-11 bg-primary px-8 py-3 rounded-bl-3xl rounded-tr-3xl">
                      {item.title}
                    </div>
                  </div>
                  <h2 className="text-secondary font-bold text-3xl mt-4 text-start">{item.title}</h2>
                  <p className="text-secondary text-lg lg:text-md mt-2 text-start">{item.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-primary text-secondary w-16 h-16 p-4 rounded-full flex items-center justify-center">
            <IoIosArrowForward size={24} />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingTreat;
