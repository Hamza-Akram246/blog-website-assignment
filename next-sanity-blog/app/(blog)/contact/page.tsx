"use client";

import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  const [notification, setNotification] = useState(""); // State for notification

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success notification
    setNotification("Message sent successfully!");
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-black p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-white mb-6">Feel Free To Contact Me</p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <IoHome size={30} className="text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-white">Federal B Area</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <BsTelephone size={30} className="text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-white">+92 316 895 1669</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <IoMailOutline size={30} className="text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white">hamzaakram442266@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <textarea
                placeholder="Type your message"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </form>
            {/* Notification */}
            {notification && (
              <div className="mt-4 p-3 bg-green-500 text-white text-center rounded-md">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

