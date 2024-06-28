import React from "react";
import { FiMail } from "react-icons/fi";
import Button from "@/app/components/Button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const Neslatter = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-semibold text-secondary sm:text-4xl ">
              Are you a Business
            </h2>
            <p className="mx-auto mb-5 max-w-2xl font-light text-secondary md:mb-12 sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam sunt harum provident 
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-2 max-w-screen-sm sm:flex sm:space-y-0 justify-center place-content-center ">
                <Link href="/">
                  <Button
                    type="primary"
                    onClick={() => alert("Primary Button Clicked")}
                  >
                    Sign Up as a Business{" "}
                    <BsArrowUpRightCircleFill className="bg-primary text-secondary rounded-full w-6 h-6  ml-2" />
                  </Button>
                </Link>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neslatter;
