import React from "react";

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
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md mt-8 md:mt-0">
          <form>
            <div className="mb-6">
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
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                required
              />
            </div>
            <div className="mb-6">
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
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                required
              />
            </div>
            <div className="mb-6">
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
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
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

export default Query;
