import React from "react";
import image1 from "../../assets/background_01.png";

function Hero() {
  return (
    <>
      <div className="pb-10 flex flex-col-reverse lg:flex-row justify-around items-center px-6 md:px-16 lg:px-28">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 p-6 md:p-10 lg:p-20">
          <div className="my-4 md:my-6">
            <div className="text-xl md:text-2xl font-light text-center lg:text-left">
              "Prioritizing{" "}
              <span className="text-[#2E8B57] font-medium">Excellence</span>{" "}
              over <span className="text-[#FF7F50] font-medium">Excess</span>."
            </div>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-center lg:text-left">
            Bringing <span className="text-[#2F6B3C]">India's best</span> to the
            world.
          </div>
          <div className="text-sm md:text-md lg:text-lg text-[#4A4A4A] my-6 md:my-10 text-center lg:text-left">
            Izra Global Private Limited, based in Habibpur, Greater Noida, is
            your trusted partner in exporting premium agricultural products and
            exquisite handicrafts. We connect Indian farmers and artisans to
            global markets, ensuring unmatched quality, sustainability, and
            cultural authenticity. Experience the richness of India's heritage
            with our efficient and internationally certified export services.
          </div>
          <div className="text-center lg:text-left">
            <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all"
              onClick={() => {
                window.location.href = "/query";
              }}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5">
          <img
            src={image1}
            alt="hero"
            className="w-full max-w-md lg:max-w-full mx-auto lg:mx-0"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
