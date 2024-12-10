import React from "react";

const ImageDisplay = ({
  src,
  alt,
  date,
  content,
  size,
  src2,
  alt2,
  date2,
  content2,
  size2,
}) => {
  return (
    <div className="relative flex flex-col gap-6">
      <div className="absolute top-4 -left-4 w-[4rem] md:w-[6rem] text-center rounded-r-full bg-[#003569] text-xs md:text-sm text-white py-2">
        {date}
      </div>
      <div className="absolute top-12 w-full text-center font-semibold text-md md:text-lg text-white py-2">
        <div className="w-[100%] flex  justify-center">
          <div className="flex w-[80%] justify-center ">{content}</div>
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        className={`object-cover object-top ${size ? size : ""} rounded-xl`}
        loading="lazy"
      />
      <div className="relative">
        <div className="absolute top-4 -left-4 w-[4rem] md:w-[6rem] text-center rounded-r-full bg-[#003569] text-xs md:text-sm text-white py-2">
          {date2}
        </div>
        <div className="absolute top-12 w-full text-center font-semibold text-md md:text-lg text-white py-2">
          <div className="w-[100%] flex justify-center">
            <div className="flex w-[80%] justify-center">{content2}</div>
          </div>
        </div>
        <img
          src={src2}
          alt={alt2}
          className={`object-cover object-top ${size2 ? size2 : ""} rounded-xl`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
