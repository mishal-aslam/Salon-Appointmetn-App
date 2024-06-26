import React from "react";
import Button from '@/app/components/Button'

const Works = () => {
  const worksData = [
    { id: 1, title: "Lorem, ipsum.", number: "o1" },
    { id: 2, title: "Lorem, ipsum.", number: "o2" },
    { id: 3, title: "Lorem, ipsum.", number: "o3" },
    { id: 4, title: "Lorem, ipsum.", number: "o4" }
  ];

  return (
    <div className="bg-primary md:p-32 p-16 ">
      <h1 className="text-secondary font-medium text-5xl text-center mb-8">
        Lorem ipsum dolor sit.
      </h1>
      <div className="flex flex-wrap gap-y-6  gap-x-12 md:flex  justify-center ">
        {worksData.map((work) => (
          <div
            key={work.id}
            className="py-12 w-[220px] md:h-[380px] h-[250px]  bg-[#F6E9CE] rounded-xl flex flex-col justify-between"
          >
            <div className="text-secondary text-3xl flex items-center justify-center">
              <span className="text-4xl font-extrabold">{work.number}</span>
            </div>
            <p className="text-center text-2xl font-semibold text-secondary pb-8">
              {work.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex place-content-center mt-16">
      <Button type="primary" onClick={() => alert('Primary Button Clicked')}>
      Primary Button
    </Button>
      </div>
    </div>
  );
};

export default Works;
