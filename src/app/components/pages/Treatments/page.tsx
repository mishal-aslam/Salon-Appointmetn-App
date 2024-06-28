"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

interface Item {
  id: number;
  image: string;
  title: string;
  text: string;
  category: string;
}

const items: Item[] = [
  {
    id: 1,
    image: "/image 1.jpg",
    title: "Item 1",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 1",
  },
  {
    id: 2,
    image: "/image 1.jpg",
    title: "Item 2",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 2",
  },
  {
    id: 3,
    image: "/image 1.jpg",
    title: "Item 3",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 1",
  },
  {
    id: 4,
    image: "/image 1.jpg",
    title: "Item 4",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 2",
  },
  {
    id: 5,
    image: "/image 1.jpg",
    title: "Item 5",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 2",
  },
  {
    id: 6,
    image: "/image 1.jpg",
    title: "Item 6",
    text: "Lorem ipsum dolor sit amet.",
    category: "Category 2",
  },
];

const categories = Array.from(new Set(items.map((item) => item.category)));

const Page = () => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

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
        (filter === "" || item.category === filter)
      );
    });
    setFilteredItems(filteredItems);
    setFilter(filter); 
  };

  return (
    <div>
      <h1 className="text-secondary font-medium text-4xl my-10 text-center mb-6">
        Treatments
      </h1>
      <p className="text-secondary text-lg font-medium text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
        faucibus.
      </p>
      <div className="flex gap-x-12  bg-primary rounded-full mx-44 h-20 justify-center items-center ">
        {/* dropdown  */}
        <div className="relative">
          <select
            value={filter}
            onChange={handleChangeFilter}
            className="block rounded-full pl-10 pr-24 h-12  border border-secondary text-secondary text-xl focus:outline-none focus:ring-1 focus:ring-secondary bg-primary w-[183px]"
          >
            <option value="" className="font-bold text-secondary">
              Filter...
            </option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        {/* compare treatment  */}
        <div className="relative">
          <Button
            type="secondary"
            onClick={() => alert("Secondary Button Clicked")}
            className="mt-2"
          >
            Secondary Button
          </Button>
        </div>
        {/* search filter  */}
        <div className="relative">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[452px] block rounded-full pl-10 pr-24 h-12  border border-secondary text-secondary text-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-secondary"
            placeholder="Search by Treatment..."
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
          filteredItems.map(
            (
              item 
            ) => (
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
                      {item.title}
                    </div>
                  </div>
                  <h2 className="text-secondary font-bold text-3xl mt-4 text-start">
                    {item.title}
                  </h2>
                  <p className="text-secondary text-lg lg:text-md mt-2 text-start">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          )
        ) : (
          <div className="text-secondary text-2xl font-medium text-center">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
