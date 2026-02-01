"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Temporary console logging (dev)
    console.log("Submitted", formData);

    // TODO: Send to API / email service
    alert("Thanks for contacting us!");
  };

  return (
    <div className="max-w-3xl min-h-screen mx-auto py-10 px-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-gray-600">
        Drop us a message and we’ll get back to you soon!
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* Contact Info */}
        <div className="flex justify-center gap-10 text-gray-700">
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-600" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <span>info@hero-kidz.com</span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6 space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FaCommentDots className="inline mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
