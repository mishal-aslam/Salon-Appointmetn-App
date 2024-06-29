import React from "react";
import Image from "next/image";
import HeroImg from '../../../public/hero.png'
import Button from '@/app/components/Button'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:pt-16 pt-0 grid grid-cols-1 md:grid-cols-2 ">


      {/* left side  */}
      <div className="text-primary text-start md:py-24 py-6 px-6 lg:px-12 md:ml-32 ml-4 w-full">
      <h1 className="text-secondary text-5xl lg:text-8xl mb-6 font-light">Reveal your <br className="md:block hidden"/> beauty with</h1>
      <a href="/" className="flex items-center text-secondary md:text-8xl text-6xl my-auto font-semibold mb-8">Glow Scout</a>
      <p className="text-secondary lg:text-xl mb-8 font-medium">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda magnam autem nostrum accusamus cupiditate, asperiores repellat voluptates dolorum consectetur.
      </p>
      <Link href="/sign-up">
      <Button type="primary" onClick={() => alert('Primary Button Clicked')}>
      Sign Up <BsArrowUpRightCircleFill className="bg-primary text-secondary rounded-full w-6 h-6  ml-2"
       />
    </Button>
    </Link>
    </div>


      {/* right side  */}
      <div className="relative lg:block md:hidden hidden">
        {/* fade color  */}
      <div className="absolute -top-16 right-0 bg-gradient-to-l from-primary via-primary to-transparent  w-full h-full "></div>
      {/* Oval shape */}
      <div className="absolute top-0 md:left-28 left-16 bg-transparent md:w-1/2  w-1/3 xl:h-[60%] lg:h-[40%] md:h-[30%] h-1/4 border-2 border-black rounded-full"></div>

      
      {/* Image */}
      <div className="relative z-10">
        <Image
          src={HeroImg}
          layout="responsive"
          width={1000}
          height={800}
          alt="Picture of the author"
        />
      </div>
    </div>


    </div>
  );
};

export default Hero;
