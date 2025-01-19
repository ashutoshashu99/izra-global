import React from "react";
const rice = [
  {
    title: "Basmati rice",
    alt: "Basmati rice image",
    imgPath: "/assets/basmati.png",
  },
];

function Products() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <div className="my-4 md:my-6">
            <div className="text-xl md:text-2xl font-light text-center lg:text-left">
              "Prioritizing{" "}
              <span className="text-[#2E8B57] font-medium">Excellence</span>{" "}
              over <span className="text-[#FF7F50] font-medium">Excess</span>."
            </div>
          </div>
          <h1 className="text-4xl font-bold">Products we offer</h1>
        </div>
        {/* Title Section */}
        <div className="flex  items-center w-full justify-center">
          <div className="border-t-4 border-[#2E8B57] w-10 mx-4"></div>
          <h1 className="text-5xl text-[#2E8B57] font-bold">Rice</h1>
          <div className="border-t-4 border-[#2E8B57] flex-grow w-auto mx-4"></div>
        </div>
        <section className="grid grid-cols-5 gap-2 m-10">
          {/* Card Section */}
          {rice.map((category, index) => (
            <div
              key={index}
              className="w-60 h-60 rounded-xl border-2 shadow-lg relative"
            >
              <img
                src={category.imgPath}
                alt={category.alt}
                className="rounded-t-xl w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/30 backdrop-blur-md py-4 px-5 rounded-b-xl z-10">
                <h1 className="font-semibold text-[#2F6B3C] text-xl">
                  {category.title}
                </h1>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Products;
