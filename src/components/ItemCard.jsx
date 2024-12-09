import React from "react";
import Link from "next/link";
const ItemCard = ({ src, alt, Title, Content }) => {
  return (
    <div className="md:basis-[18rem] lg:basis-[24rem]">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 p-4 lg:p-6 flex flex-col justify-between h-full">
          <div className="text-[#003569] lg:text-xl font-semibold">
            <div className="text-[#003569] text-md lg:text-xl font-semibold">
              {Title}
            </div>
            <div className="text-[#727272] text-xs lg:text-sm">{Content}</div>
          </div>
          <Link
            className="text-[#003569] text-xs lg:text-sm font-semibold underline underline-offset-4"
            href="/"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
