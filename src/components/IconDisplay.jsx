import React from "react";

const IconDisplay = ({ Title, Info, src, alt }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="flex bg-white h-18 w-18 md:h-16 md:w-16 lg:h-[130px] lg:w-[130px] p-4 rounded-full justify-center items-center">
        <img
          src={src}
          loading="lazy"
          alt={alt}
          className="w-16 h-16 md:w-12 md:h-12"
        />
      </div>

      <div className="font-medium text-md md:text-lg">{Title}</div>
      <div className="font-normal text-xs w-52 text-center text-[#D9D9D9]">
        {Info}
      </div>
    </div>
  );
};

export default IconDisplay;
