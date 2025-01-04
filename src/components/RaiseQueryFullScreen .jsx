import React from "react";

const RaiseQueryFullScreen = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#2F4F2F] to-[#8DA78A]">
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
              <h2 className="font-semibold text-xl">Phone:</h2>
              <p>+1 234 567 890</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Email:</h2>
              <p>support@izraglobal.com</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Address:</h2>
              <p>Izra Global Headquarters, 123 Greenway Blvd, City, Country</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-2xl">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-800 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2F4F2F] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#3A5F3A] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RaiseQueryFullScreen;
