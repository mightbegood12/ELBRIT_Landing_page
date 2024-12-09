import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#17414F] font-sans text-white pb-2 md:pb-12">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center p-4">
        <div className="bg-[#215D72] flex flex-row items-center gap-2 md:gap-4 rounded-lg p-4 lg:w-[20rem]">
          <img
            src="/phone.svg"
            alt="phone"
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
          <div className="flex flex-col text-sm justify-center text-nowrap md:text-md">
            <div className="font-normal">Phone Number</div>
            <div className="font-semibold">+974 3118 1843</div>
          </div>
        </div>
        <div className="bg-[#215D72] flex flex-row items-center gap-2 md:gap-4 rounded-lg p-4 lg:w-[20rem]">
          <img
            src="/mail.svg"
            alt="mail"
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
          <div className="flex flex-col text-sm justify-center text-nowrap md:text-md">
            <div className="font-normal">Email Address</div>
            <div className="font-semibold">Elbrithcqhr@gmail.com</div>
          </div>
        </div>
        <div className="bg-[#215D72] flex flex-row items-center gap-2 md:gap-4 rounded-lg p-4 lg:w-[20rem]">
          <img
            src="/location.svg"
            alt="location"
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
          <div className="flex flex-col text-sm justify-center text-nowrap md:text-md">
            <div className="font-normal">Office Location</div>
            <div className="font-semibold w-[12rem] truncate">
              Ambassador Street, Zone 61, Chennai
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:justify-center lg:justify-start  lg:ml-[15rem] items-center p-4">
        <img src="/logo.png" alt="" className="bg-white p-4 w-max h-max" />
        <div className="font-normal text-xs w-[20rem] leading-5">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </div>
      </div>
      <div className="flex flex-row gap-2 text-xs items-center text-center justify-center lg:justify-start lg:ml-[15rem] p-4">
        <img src="/location-sm.svg" alt="location" className="w-2 h-2" />
        <div>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </div>
      </div>
    </div>
  );
};

export default Footer;
