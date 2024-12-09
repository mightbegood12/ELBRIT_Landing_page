import IconDisplay from "@/components/IconDisplay";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";
import ImageDisplay from "@/components/ImageDisplay";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="font-mono h-lvh relative">
      <Navbar />
      {/* Hero section  */}
      <div className="md:h-[130vh] lg:h-[140vh] mx-6 bg-[#E2F5FB] flex flex-col items-center mb-8 md:mb-0">
        <div className="font-sans font-bold text-[40px] md:text-nowrap md:text-[80px] lg:text-[124px] text-center pt-12 text-[#003569]">
          Essential Vitamins
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center mb-16 w-full items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-2 font-sans md:pr-8">
            <div className="font-normal mt-4 md:mt-0 text-md md:text-xl text-[#727272]">
              Online Medical Supplies
            </div>
            <div className="w-56 text-xl md:text-2xl font-medium text-[#17414F]">
              Get Your Vitamins & Minerals
            </div>
            <button className="p-3 text-center w-20 md:w-40 text-xs md:text-sm md:font-medium text-white rounded-full bg-[#17414F]">
              EXPLORE
            </button>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-[200px] h-[200px] md:w-80 md:h-80 bg-[#FFE9B5] rounded-tl-[80px] rounded-br-[80px]" />
            <div className="z-10 absolute lg:bottom-10 lg:right-0 w-[200px] h-[200px] lg:w-[350px] lg:h-[380px]">
              <Image
                src={"/med_bottle.png"}
                alt="Medicine bottle"
                width="380"
                height="380"
                priority
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/fO7HgAHZwL1TIToIAAAAABJRU5ErkJggg=="
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col font-sans gap-4 p-4 lg:w-60 lg:pl-6">
            <div className="flex flex-row gap-6">
              <img
                src="/vitamins.svg"
                alt="vitamins"
                className="h-14 w-14 md:h-16 md:w-16"
              />
              <div>
                <div className="text-md md:text-xl font-semibold text-[#17414F]">
                  Vitamins
                </div>
                <div className="text-[10px] md:text-xs md:w-40 font-normal font-mono text-[#727272]">
                  Increased Vitamins and minerals in your diet
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <img
                src="/weight.svg"
                alt="weight"
                className="h-14 w-14 md:h-16 md:w-16"
              />
              <div>
                <div className="text-md md:text-xl font-semibold text-[#17414F]">
                  Weight Loss
                </div>
                <div className="text-[10px] md:text-xs md:w-40 font-normal font-mono text-[#727272]">
                  Find Scientifically proven solutions
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <img
                src="/foods.svg"
                alt="foods"
                className="h-14 w-14 md:h-16 md:w-16"
              />
              <div>
                <div className="text-md md:text-xl font-semibold text-[#17414F]">
                  Functional Foods
                </div>
                <div className="text-[10px] md:text-xs md:w-40 font-normal font-mono text-[#727272]">
                  From protein powers to baby formula
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-[100px] lg:ml-[200px] gap-2 self-start mb-8">
          <div className="bg-black opacity-20 w-6 h-6 lg:w-8 lg:h-8 rounded-full" />
          <div className="bg-black opacity-20 w-6 h-6 lg:w-8 lg:h-8 rounded-full" />
        </div>
      </div>
      {/* Elements section */}
      <div className="flex flex-col items-center md:absolute md:top-[95vh] lg:top-[110vh] left-[12vw] mb-8 md:mb-0">
        <div className="w-[80vw] lg:w-[75vw] bg-[#17414F] rounded-[80px] h-[1200px] md:h-[350px] lg:h-[500px] flex flex-col md:flex-row justify-center font-sans relative">
          <div className="md:grid flex flex-col md:grid-cols-3 justify-items-center text-white md:absolute md:-top-8 lg:-top-12 gap-4 lg:gap-40">
            <IconDisplay
              Title="Clinically Studied"
              Info="All products that we offer have undergone lab and safety tests"
              src="/clinic.svg"
              alt="Clinic"
            />
            <IconDisplay
              Title="Vegetarian Friendly"
              Info="We have a wide selection of vegetarian products to meet your needs"
              src="/vegan.svg"
              alt="Veg friendly"
            />
            <IconDisplay
              Title="Made In India"
              Info="Shop local and explore health products made right here in India"
              src="/india.svg"
              alt="India"
            />
          </div>
          <div className="md:grid flex flex-col md:grid-cols-3 justify-items-center text-white md:absolute mt-6 md:mt-40 lg:mt-52 gap-4 lg:gap-40">
            <IconDisplay
              Title="Free Shipping"
              Info="We deliver to your door with no shipping costs on your orders"
              src="/cart.svg"
              alt="Shipping"
            />
            <IconDisplay
              Title="No Risk"
              Info="We ensure that all products are safe and within their use-by date"
              src="/risk.svg"
              alt="No risk"
            />
            <IconDisplay
              Title="GMO Free"
              Info="Natural, no modified products and derivatives for those who need it"
              src="/gmo.svg"
              alt="gmo free"
            />
          </div>
        </div>
      </div>
      {/*Ingredients Section */}
      <div className="flex flex-col items-center w-[75vw] font-sans md:mt-[12vh] lg:mt-[40vh] mx-auto gap-2 md:gap-6">
        <div className="flex flex-col md:flex-row justify-center w-full gap-3 md:gap-4 lg:gap-6">
          <div className="flex flex-col gap-2 lg:gap-4 md:basis-[24rem] lg:basis-[38rem]">
            <div className="text-[#003569] font-semibold">INGREDIENTS</div>
            <div className="text-[#17414F] md:text-2xl lg:text-4xl font-semibold">
              Better Ingredients
            </div>
            <div className="text-[#727272] text-xs lg:text-sm">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for hight quality products!
            </div>
          </div>
          <ItemCard
            src={"/VitaminC.jpg"}
            alt={"vitamin C"}
            Title={"Vitamin C"}
            Content={"Vitamin C ascorbic acid"}
          />
          <ItemCard
            src={"/VitaminB3.jpg"}
            alt={"vitamin B3"}
            Title={"Vitamin B3"}
            Content={"Niacin for healty gut and skin"}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full gap-2 md:gap-4 lg:gap-6">
          <ItemCard
            src={"/Magnesium.jpg"}
            alt={"Magnesium"}
            Title={"Magnesium"}
            Content={"Boost energy and suppor muscle function"}
          />
          <ItemCard
            src={"/h_acid.jpg"}
            alt={"hyaluronic acid"}
            Title={"Hyaluronic Acid"}
            Content={"For smooth, supple and soft skin!"}
          />
          <ItemCard
            src={"/lactobacillus.jpg"}
            alt={"lacto bacillus"}
            Title={"Lactobacillus"}
            Content={"Invigorate your gut microbiome"}
          />
          <div className="flex flex-row md:flex-col justify-between">
            <div className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px] bg-[#a0ddf2] rounded-br-full rounded-bl-[400px] rounded-tr-[400px]" />
            <div className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px] bg-[#ffcc56] rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Blog Section */}
      <div className="mx-[4rem]">
        <div className="font-sans flex flex-col items-center mt-12 gap-4">
          <div className="text-[#003569] text-sm font-semibold">OUR BLOG</div>
          <div className="text-[#17414F] text-4xl font-semibold">
            Latest News
          </div>
        </div>
        <div className="flex flex-row gap-4 font-sans mb-12">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <ImageDisplay
                src={"/bottle-sm.jpg"}
                alt={"ginger medicine bottle"}
                date={"20 APR"}
                content={"The Covid-19 Epidemic in 2022 Is Back"}
                size={"h-full w-full"}
                src2={"/capsules.jpg"}
                alt2={"capsules"}
                date2={"20 APR"}
                content2={"The Covid-19 Epidemic in 2022 Is Back"}
                size2={"h-full w-full"}
              />
              <ImageDisplay
                src={"/bottle-sm.jpg"}
                alt={"ginger medicine bottle"}
                date={"20 APR"}
                content={"The Covid-19 Epidemic in 2022 Is Back"}
                size={"h-[40%] w-full"}
                src2={"/capsules.jpg"}
                alt2={"capsules"}
                date2={"20 APR"}
                content2={"The Covid-19 Epidemic in 2022 Is Back"}
                size2={"h-[192%] w-full"}
              />
              <ImageDisplay
                src={"/bottle-sm.jpg"}
                alt={"ginger medicine bottle"}
                date={"20 APR"}
                content={"The Covid-19 Epidemic in 2022 Is Back"}
                size={"h-full w-full"}
                src2={"/capsules.jpg"}
                alt2={"capsules"}
                date2={"20 APR"}
                content2={"The Covid-19 Epidemic in 2022 Is Back"}
                size2={"h-full w-full"}
              />
              <ImageDisplay
                src={"/bottle-sm.jpg"}
                alt={"ginger medicine bottle"}
                date={"20 APR"}
                content={"The Covid-19 Epidemic in 2022 Is Back"}
                size={"h-[40%] w-full"}
                src2={"/capsules.jpg"}
                alt2={"capsules"}
                date2={"17 MAR"}
                content2={"Hac hendrerit mus nons semper suspendisse"}
                size2={"h-[192%] w-full"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
