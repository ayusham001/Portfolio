import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TransitionEffect from "./TransitionEffect";

export default function Contact({ isLightMode }) {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowSuccessPopup(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="">
      <TransitionEffect />
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={
          isLightMode
            ? " mt-32 w-fit max-w-lg md:w-full text-orange-50 mx-auto border-2 bg-sky-950 shadow-sky-950 shadow-2xl rounded-xl p-6"
            : "w-fit mt-32 max-w-lg md:w-full mx-auto border shadow-orange-50  shadow-lg rounded-xl p-6"
        }
      >
        <h3 className="text-center">Contact</h3>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className={
              isLightMode
                ? "block text-orange-50 font-medium mb-1"
                : "block text-white font-medium mb-1"
            }
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className={
              isLightMode
                ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className={
              isLightMode
                ? "block text-orange-50 font-medium mb-1"
                : "block text-white font-medium mb-1"
            }
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className={
              isLightMode
                ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className={
              isLightMode
                ? "block text-orange-50 font-medium mb-1"
                : "block text-white font-medium mb-1"
            }
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={
              isLightMode
                ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            }
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLightMode ? "" : "text-white"
          }`}
        >
          Submit
        </button>
      </form>
      {showSuccessPopup && (
        <div className="fixed px-5 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-green-500 text-lg font-semibold mb-4">
              Success! Your message has been sent.
            </p>
            <button
              onClick={closeSuccessPopup}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
