import React, { act } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-white md:gap-2 justify-between items-center">
      <Link href="/">
        <Image
          priority={true}
          src={"/logo.png"}
          alt="Eden Pharmacy Logo"
          width="200"
          height="45"
          className="p-4 ml-4"
        />
      </Link>
      <div className="hidden md:flex flex-row gap-2 mr-4">
        <Link
          className="md:p-4 text-sm md:text-lg font-sans text-[#003569]"
          href="/"
        >
          About Us
        </Link>
        <Link
          className="md:p-4 text-sm md:text-lg font-sans text-[#003569]"
          href="/"
        >
          Contact
        </Link>
      </div>
      <button className="flex md:hidden">
        <img src="/menu.svg" alt="menu" className="h-12 w-12 mr-4" />
      </button>
    </div>
  );
};

export default Navbar;
