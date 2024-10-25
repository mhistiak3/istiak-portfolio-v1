"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 flex items-center">
      {/* Nav for big screen */}
      <div className="w-full lg:w-4/5 mx-5 lg:mx-auto  hidden md:flex  justify-between items-center ">
        <h2 className="text-2xl font-semibold bg-green-500 py-1 px-3 cursor-pointer rounded-md text-white">
          Istiak Ahammad
        </h2>
        <div className="flex gap-x-4 font-semibold">
          <Link
            href="#home"
            className="hover:bg-green-500 px-2 py-1 rounded-md transition hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:bg-green-500 px-2 py-1 rounded-md transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:bg-green-500 px-2 py-1 rounded-md transition hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="hover:bg-green-500 px-2 py-1 rounded-md transition hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:bg-green-500 px-2 py-1 rounded-md transition hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Nav for small screen */}

      <div className="w-full lg:w-4/5 mx-5 lg:mx-auto md:hidden flex justify-between items-center relative">
        <h2 className="text-xl md:text-2xl font-semibold bg-green-500 py-1 px-3 cursor-pointer rounded-md text-white">
          Istiak Ahammad
        </h2>

        {/* Hamburger menu */}
        {isOpen ? (
          <div
            className="relative w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block absolute w-full h-0.5 bg-gray-800 transform rotate-45 top-1/2 left-0 translate-y-[-50%]"></span>
            <span className="block absolute w-full h-0.5 bg-gray-800 transform -rotate-45 top-1/2 left-0 translate-y-[-50%]"></span>
          </div>
        ) : (
          <div
            className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-full h-0.5 bg-gray-800"></span>
            <span className="block w-full h-0.5 bg-gray-800"></span>
            <span className="block w-full h-0.5 bg-gray-800"></span>
          </div>
        )}

        {isOpen && (
          <div className="flex flex-col top-10 right-3 w-36 rounded-md bg-white gap-x-4 font-semibold absolute overflow-hidden">
            <Link
              href="#home"
              className="hover:bg-green-500 px-2 py-1 transition hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/"
              className="hover:bg-green-500 px-2 py-1  transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/"
              className="hover:bg-green-500 px-2 py-1  transition hover:text-white"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="hover:bg-green-500 px-2 py-1  transition hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/"
              className="hover:bg-green-500 px-2 py-1  transition hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
