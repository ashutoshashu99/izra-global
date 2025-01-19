import React from "react";
import ContactForm from "./ContactForm";

const RaiseQueryFullScreen = () => {
  return (
    <section className="relative flex items-center justify-center min-h-auto bg-gradient-to-br from-[#2F4F2F] to-[#8DA78A]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#3E5E3E] to-[#A7D7A7] opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3E5E3E] to-[#A7D7A7] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-20 p-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-white">
          <h1 className="text-5xl font-bold">Raise a Query</h1>
          <p className="text-gray-200 text-lg">
            We're here to help! Feel free to reach out with any questions or
            concerns about our services.
          </p>
          <div className="space-y-4">
            <div>
             g <h2 className="font-semibold text-xl">Phone:</h2>
              <p>+91 9971207059</p>
              <p>+91 9910939403</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Email:</h2>
              <p>support@izraglobal.com</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Address:</h2>
              <p>HOUSE NO.-Q/8, VILLAGE HABIBPUR I.A. SURAJPUR GREATER NOIDA, 201306, GAUTAM BUDDHA NAGAR, UTTAR PRADESH</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default RaiseQueryFullScreen;
