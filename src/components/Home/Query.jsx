import React from "react";
import ContactForm from "../ContactForm";

const Query = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-10 rounded-lg shadow-lg bg-gradient-to-br from-[#2F4F2F] to-[#8DA78A]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-white">
        <h1 className="text-4xl font-bold">Raise a Query</h1>
        <p className="text-gray-200">
          We are here to assist you! Feel free to reach out for any queries or
          information about our products and services.
        </p>
        
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-lg md:mt-0">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Query;
