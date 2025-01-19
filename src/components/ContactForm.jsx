import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6hxqm4", // Replace with your EmailJS service ID
        "template_kktje5g", // Replace with your EmailJS template ID
        form.current,
        "B9Xg5eXWIsaSs_H3x" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your query has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-auto rounded-lg shadow-2xl bg-gradient-to-r from-green-100 to-[#EAF4F4]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F2F] text-gray-800"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F2F] text-gray-800"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F2F] text-gray-800"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              name="query"
              id="description"
              rows="4"
              placeholder="Enter your query or message"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F2F] text-gray-800"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2E4F2F] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#1b2e1c] shadow-md transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
