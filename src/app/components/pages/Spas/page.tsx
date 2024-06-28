"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Button from "@/app/components/Button";

interface Item {
  id: number;
  image: string;
  title: string;
  text: string;
  category: string;
  location: string;
  para: string;
}

const items: Item[] = [
  {
    id: 1,
    image: "/image 1.jpg",
    title: "Hunza Serenity",
    text: "Lorem ipsum dolor sit amet.",
    category: "Hotel",
    location: "mirpur, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 2,
    image: "/image 1.jpg",
    title: "Lahore Luxury",
    text: "Lorem ipsum dolor sit amet.",
    category: "Resort",
    location: "Lahore, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 3,
    image: "/image 1.jpg",
    title: "Naran Nirvana",
    text: "Lorem ipsum dolor sit amet.",
    category: "Lodge",
    location: "islamabad, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 4,
    image: "/image 1.jpg",
    title: "Islamabad Oasis",
    text: "Lorem ipsum dolor sit amet.",
    category: "Spa",
    location: "Islamabad, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 5,
    image: "/image 1.jpg",
    title: "Karachi Getaway",
    text: "Lorem ipsum dolor sit amet.",
    category: "Beach Resort",
    location: "Karachi, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 6,
    image: "/image 1.jpg",
    title: "Peshawar Paradise",
    text: "Lorem ipsum dolor sit amet.",
    category: "Hotel",
    location: "Peshawar, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 7,
    image: "/image 1.jpg",
    title: "Skardu Sanctuary",
    text: "Lorem ipsum dolor sit amet.",
    category: "Lodge",
    location: "multan, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 8,
    image: "/image 1.jpg",
    title: "Quetta Hideaway",
    text: "Lorem ipsum dolor sit amet.",
    category: "Camping",
    location: "islamabad, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 9,
    image: "/image 1.jpg",
    title: "Gilgit Getaway",
    text: "Lorem ipsum dolor sit amet.",
    category: "Hotel",
    location: "multan, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 10,
    image: "/image 1.jpg",
    title: "Muzaffarabad Retreat",
    text: "Lorem ipsum dolor sit amet.",
    category: "Resort",
    location: "lahore, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 11,
    image: "/image 1.jpg",
    title: "Mirpur Haven",
    text: "Lorem ipsum dolor sit amet.",
    category: "Lodge",
    location: "multan, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 12,
    image: "/image 1.jpg",
    title: "Multan Oasis",
    text: "Lorem ipsum dolor sit amet.",
    category: "Spa",
    location: "Multan, Pakistan",
    para: "lorem epsum"
  },
  {
    id: 13,
    image: "/image 1.jpg",
    title: "Pure Tranquility",
    text: "Lorem ipsum dolor sit amet.",
    category: "Wellness",
    location: "karachi",
    para: "lorem epsum"
  },
  {
    id: 14,
    image: "/image 1.jpg",
    title: "Crystal Calm",
    text: "Lorem ipsum dolor sit amet.",
    category: "Spa",
    location: "lahore",
    para: "lorem epsum"
  },
  {
    id: 15,
    image: "/image 1.jpg",
    title: "Radiant serenity",
    text: "Lorem ipsum dolor sit amet.",
    category: "Yoga",
    location: "Peshawar",
    para: "lorem epsum"
  },
  {
    id: 16,
    image: "/image 1.jpg",
    title: "Eternal Bliss",
    text: "Lorem ipsum dolor sit amet.",
    category: "Yoga",
    location: "Karachi",
    para: "lorem epsum"
  }
]

const categories = Array.from(new Set(items.map((item) => item.category)));

const Page = () => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      return (
        (filter === "" || item.category === filter) &&
        (location === "" ||
          item.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredItems(filteredItems);
  }, [filter, location]);

  const handleChangeFilter = (event: any) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    const filteredItems = items.filter((item) => {
      return newFilter === "" || item.category === newFilter;
    });
    setFilteredItems(filteredItems);
  };

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === "" || item.category === filter) &&
        (location === "" ||
          item.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <h1 className="text-secondary font-medium text-4xl my-10 text-center mb-6">
        Salons & Spas
      </h1>
      <p className="text-secondary text-lg font-medium text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
        faucibus.
      </p>
      <div className="flex flex-wrap md:gap-x-12 gap-y-3 bg-primary md:rounded-full md:mx-24 md:h-20 h-auto p-4 justify-center items-center  ">
        {/* dropdown  */}
        <div className="relative">
          <select
            value={filter}
            onChange={handleChangeFilter}
            className="block rounded-full pl-10 pr-24 h-12  border border-secondary text-secondary text-xl focus:outline-none focus:ring-1 focus:ring-secondary bg-primary md:w-[183px] w-full"
          >
            <option value="" className="font-bold text-secondary">
              Filter...
            </option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        {/* location filter   */}
        <div className="relative">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block rounded-full pl-10 pr-24 h-12 border border-secondary text-secondary text-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-secondary md:w-[350px] w-full"
            placeholder="Location"
          />
        </div>
        {/* search filter  */}
        <div className="relative">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-[452px] w-full block rounded-full pl-10 pr-24 h-12  border border-secondary text-secondary text-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-secondary"
            placeholder="Search by Treatment or Spas"
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
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
                  <div className="absolute -top-2 -right-2 mt-2 mr-2 bg-primary px-8 py-3 rounded-bl-3xl rounded-tr-3xl text-secondary font-bold">
                    {item.para}
                  </div>
                </div>
                <h2 className="text-secondary font-bold text-2xl mt-4 text-start">
                  {item.title}
                </h2>
                <p className="text-secondary text-base lg:text-base mt-2 text-start">
                  {item.text}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-secondary text-2xl font-medium text-center ">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
