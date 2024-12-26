import React from "react";
import image1 from '../assets/background_01.png'
function Hero() {
  return (
    <>
      <div className="py-20  flex justify-around items-center">
        <div className="w-2/5 p-20 ml-5">
          <div className="text-5xl font-bold leading-none ">
            Bringing <span className="text-[#2F6B3C]">India's best</span> to the
            world.
          </div>
          <div className="text-md text-[#4A4A4A] my-10">
            Izra Global Private Limited, based in Habibpur, Greater Noida, is
            your trusted partner in exporting premium agricultural products and
            exquisite handicrafts. We connect Indian farmers and artisans to
            global markets, ensuring unmatched quality, sustainability, and
            cultural authenticity. Experience the richness of India's heritage
            with our efficient and internationally certified export services.
          </div>
          <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all">
            Contact Us
          </button>
        </div>
        <div className="w-3/5 mr-5">
            <img src={image1} alt="hero"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
