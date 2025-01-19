import React from "react";
import logo from "../assets/logo.svg";
import mission from "../assets/mission.svg";
const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen py-10 md:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12 mx-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2F6B3C]">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Discover the journey of IZRA Global Private Limited
        </p>
      </div>

      {/* Content Section */}
      <div className="space-y-12 mx-6">
        {/* Welcome Section */}
        <div className="flex flex-col justify-around md:flex-row items-center gap-8">
          <div className="">
            <img
              src={logo}
              alt="IZRA Global Logo"
              className="hover:scale-105 transform transition-all duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome to IZRA Global
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At{" "}
              <span className="font-bold text-lg ">
                IZRA Global Private Limited
              </span>
              , we connect India’s finest agricultural products and handcrafted
              treasures with global markets. From our base in Habibpur, Greater
              Noida, we are proud to be the trusted partner for businesses
              worldwide, delivering quality, sustainability, and cultural
              authenticity.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6 py-32">
          <div
            className="p-6 border rounded-lg shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300 relative  bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage:`url(${mission})`,
            // }}
          >
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div> */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower businesses and communities by delivering sustainable,
              innovative, and customer-centric solutions that foster growth and
              success.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a global leader, recognized for excellence, integrity, and
              transformative solutions that shape a brighter future for all.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Values
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>Innovation:</strong> Embracing change and finding
                creative solutions.
              </li>
              <li>
                <strong>Integrity:</strong> Building trust with transparency and
                accountability.
              </li>
              <li>
                <strong>Collaboration:</strong> Working together to achieve
                shared goals.
              </li>
              <li>
                <strong>Excellence:</strong> Delivering unmatched quality and
                exceeding expectations.
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center pb-20">
          <h3 className="text-2xl font-semibold text-gray-800">
            Experience the Essence of India
          </h3>
          <p className="mt-4 text-gray-600">
            With IZRA Global, explore the finest products from India’s farmers
            and artisans, crafted to perfection and delivered with care.
          </p>
          <button className="mt-6 px-6 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all"
            onClick={() => {
              window.location.href = "/products";
            }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
