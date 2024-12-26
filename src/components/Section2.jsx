import React from "react";
import image1 from "../assets/quality.svg";
import image2 from "../assets/Delivery-bro.svg";
import image3 from "../assets/money.png";
const card = [
  {
    header: "Quality Product ",
    image: image1,
    description:
      "Premium, sustainable products meticulously sourced and crafted to meet global standards, ensuring excellence and customer satisfaction worldwide.",
  },
  {
    header: "Timely Delivery",
    image: image2,
    description:
      "Reliable logistics ensure every order is delivered on time, maintaining trust and efficiency across global markets.",
  },
  {
    header: "Competitive Price",
    image: image3,
    description:
      "Offering exceptional products at competitive prices, ensuring value and affordability without compromising quality or standards.",
  },
];

function Section2() {
  return (
    <>
      <section className="bg-[#F3F4F7] p-10">
        <div className="m-5 text-4xl font-bold leading-none flex items-center justify-center">
          <h1>Why Us?</h1>
        </div>
        <div className="mt-16 flex justify-around">
          {card.map((items) => (
            <div className="max-w-xs rounded-xl shadow-md bg-[#1c231d] text-gray-100">
            <img
              src= {items.image}
              alt="Quality-Logo"
              className="object-cover object-center w-full rounded-t-xl h-72 bg-white"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {items.header}
                </h2>
                <p className="text-gray-400">{items.description} </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Section2;
