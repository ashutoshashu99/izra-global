import React, { useState } from "react";
import Rice from "../assets/rice.jpg"; // Static image import

const categoryList = [
  {
    title: "Rice",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate, in aliquid itaque quidem possimus veritatis perferendis esse dolorem, commodi quibusdam voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    img: Rice,
  },
  {
    title: "Jaggery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus veritatis perferendis esse dolorem, commodi quibusdam voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    img: "", // Empty image path
  },
];

const ProjectCard = ({ category }) => {
  return (
    <section className="flex" id="media">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="py-12 h-36">{category.desc}</p>
        <button className="px-8 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all">
          Raise query
          </button>
      </div>
      <div className="w-1/2 ">
        {category.img ? (
          <img className="rounded-3xl transform transition duration-300 hover:scale-105" src={category.img} alt={category.title} />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      
    </section>
  );
};

const Section3 = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <section className="p-20 bg-[#FFFFFF]">
      <div className="pb-20">
        <h1 className="text-4xl font-semibold pb-8">
          <span className="text-[#2F6B3C]">Products</span> we deal in
        </h1>
        <p className="text-xl w-1/2">
          Our software development company is truly proud of the wonderful
          clients we have worked with. We enjoy a long-term partnership.
        </p>
      </div>

      <div>
        <div className="flex font-light pb-20 ml-8">
          {["Project 1", "Project 2"].map((name, index) => (
            <div key={`button-${index}`}>
              <button
                className={`text-2xl ${
                  sliderIndex === index
                    ? "underline font-semibold decoration-yellow-400 underline-offset-8 decoration-4"
                    : ""
                } w-40`}
                onClick={() => setSliderIndex(index)}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <ProjectCard category={categoryList[sliderIndex]} />
      </div>
    </section>
  );
};

export default Section3;
