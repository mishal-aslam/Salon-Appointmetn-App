"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Item {
  id: number;
  image: string;
  title: string;
  text: string;
}

const items: Item[] = [
  { id: 1, image: '/image 1.jpg', title: 'Item 1', text: 'Lorem ipsum dolor sit amet.' },
  { id: 2, image: '/image 1.jpg', title: 'Item 2', text: 'Lorem ipsum dolor sit amet.' },
  { id: 3, image: '/image 1.jpg', title: 'Item 3', text: 'Lorem ipsum dolor sit amet.' },
  { id: 4, image: '/image 1.jpg', title: 'Item 4', text: 'Lorem ipsum dolor sit amet.' },
  { id: 5, image: '/image 1.jpg', title: 'Item 5', text: 'Lorem ipsum dolor sit amet.' },
  { id: 6, image: '/image 1.jpg', title: 'Item 6', text: 'Lorem ipsum dolor sit amet.' },
  // Add more items here
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <div className='flex gap-x-12 '>
  <div className='relative'>
    <input
      type="search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="block rounded-full pl-10 pr-24 h-12 w-72 border border-secondary text-secondary text-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-gray-900"
      placeholder="Search..."
    />
    <button
      className="bg-secondary hover:bg-secondaryDark text-primary font-bold text-sm px-6 mr-3 py-2 rounded-full absolute right-0 top-1/2 -translate-y-1/2"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</div>

        
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center justify-center items-center mx-auto md:px-24 px-5 space-y-6 mt-12 space-x-4 overflow-hidden">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex-none basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <div className="text-center relative">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-3xl md:w-[300px] w-full h-[220px] md:h-[300px]"
                />
                <div
                  className="absolute -top-2 -right-2 mt-2 mr-2 bg-primary px-8 py-3 rounded-bl-3xl rounded-tr-3xl text-secondary font-bold"
                >
                  {item.title}
                </div>
              </div>
              <h2 className="text-secondary font-bold text-3xl mt-4 text-start">{item.title}</h2>
              <p className="text-secondary text-lg lg:text-md mt-2 text-start">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;