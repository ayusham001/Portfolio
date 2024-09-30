import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TransitionEffect from "./TransitionEffect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contact({ isLightMode }) {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setShowSuccessPopup(true);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="mt-32">
      <TransitionEffect />
      <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-8 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
        <div
          className={`md:w-1/2 w-full  md:mb-0 ${
            isLightMode ? "text-gray-800" : "text-gray-200"
          } space-y-8`}
        >
          <h3 className="text-2xl md:text-4xl font-bold">Contact Information</h3>
          <div className=" space-y-4">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918318178039" target="_blank">
                +91 8318178039
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:ayush.info.dev@gmail.com" target="_blank">
                ayush.info.dev@gmail.com
              </a>
            </p>
            <p>
              <strong>Country:</strong> India
            </p>
          </div>
          <div className="space-x-4">
            <a
              href="https://www.linkedin.com/in/ayush-mishra-809385215/"
              target="_blank"
            >
              <LinkedInIcon
                className={isLightMode ? "text-blue-600" : "text-white-800"}
              />
            </a>
            <a href="https://github.com/ayusham001" target="_blank">
              <GitHubIcon
                className={isLightMode ? "text-blue-950" : "text-white-800"}
              />
            </a>
            <a href="https://twitter.com/ayusham001" target="_blank">
              <XIcon
                className={isLightMode ? "text-black" : "text-white-800"}
              />
            </a>
            <a href="https://www.instagram.com/ayush.__mishra/" target="_blank">
              <InstagramIcon
                className={isLightMode ? "text-rose-500" : "text-white-800"}
              />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className={`w-full md:my-0 my-14 md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg`}
        >
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Contact
          </h3>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
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
