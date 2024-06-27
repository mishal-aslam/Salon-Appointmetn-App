"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "@/app/components/Button";
import Link from "next/link";
import { UserButton,   SignedIn } from "@clerk/nextjs";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="border border-secondary h-[100px]  px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-auto mt-4">
          <a
            href="/"
            className="flex items-center text-Secondary text-3xl font-semibold"
          >
            Glow Scout
          </a>
          <div className="flex items-center lg:order-2 ">
            <Link href="/sign-up">
              <Button type="secondary" className="flex gap-x-3 items-center">
                Sign In/Up
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </Button>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-secondary rounded-lg lg:hidden  focus:outline-none "
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-secondary" />
              ) : (
                <FiMenu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>
          <div
            className={`flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-8  font-medium lg:flex-row lg:space-x-20 lg:mt-0  md:bg-transparent w-full bg-primary rounded-lg  z-10">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-secondary text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/components/pages/Treatments"
                  className="block py-2 pr-4 pl-3 text-secondary text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="/components/pages/Spas"
                  className="block py-2 pr-4 pl-3 text-secondary text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                >
                  Spas
                </a>
              </li>
              <li>
                <a
                  href="/components/pages/Blog"
                  className="block py-2 pr-4 pl-3 text-secondary text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
