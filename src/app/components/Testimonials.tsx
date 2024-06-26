import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Home: React.FC = () => {
  type TestimonialProps = {
    imageSrc: string;
    heading: string;
    paragraph: string;
    stars: number;
  };                      

  const Testimonial: React.FC<TestimonialProps> = ({ imageSrc, heading, paragraph, stars }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-transparent rounded-lg  overflow-hidden md:flex md:space-x-10">
          <div className="md:flex-shrink-0">
            <Image src={imageSrc} alt="Testimonial" width={300} height={300} className="rounded-md" />
          </div>
          <div className="mt-4 md:mt-0 md:flex md:flex-col md:justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">{heading}</h2>
            <p className="text-secondary mb-4 text-lg break-all">{paragraph}</p>
            <div className="flex space-x-1 text-yellow-500 my-5">
              {Array.from({ length: stars }, (_, i) => (
                <FaStar key={i} className='w-12 h-10' />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center flex-col">
      <h1 className="text-secondary font-medium text-5xl text-center mb-8">
        Lorem ipsum dolor sit.
      </h1>
      <Testimonial
        imageSrc="/img2.jpg"
        heading="Ashlley Ke"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        stars={5}
      />
    </div>
  );
};

export default Home;
