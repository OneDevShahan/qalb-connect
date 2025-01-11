"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaBell,
  FaCalendarAlt,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date().getFullYear()); // Example of dynamic content
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={15} />,
      url: "https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={15} />,
      url: "https://github.com/OneDevShahan",
      bgColor: "bg-gray-400 hover:bg-gray-800",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={15} />,
      url: "https://x.com/shahanahmad7",
      bgColor: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={15} />,
      url: "mailto:shahanahmad321@gmail.com",
      bgColor: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={15} />,
      url: "https://www.instagram.com/shahanahmad321/",
      bgColor: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="space-y-2">
            <li>
              <span>Email: </span>
              <a
                href="mailto:onedevshahan@gmail.com"
                className="underline hover:text-blue-500"
              >
                onedevshahan@gmail.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <a
                href="tel:+918445470641"
                className="underline hover:text-blue-500"
              >
                +91 8445470641
              </a>
            </li>
            <li>Address: Hi-Tech City, Hyderabad</li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">About</h3>
          <p>
            QalbConnect is a platform for sharing Duas, Islamic content, and
            spiritual resources. It offers a rich collection of Duas, Quranic
            verses, and hadiths, fostering a community of learning and
            connection to support users in their spiritual journey.
          </p>
        </div>

        {/* Footer Categories Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Categories</h3>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Link
              to="/daily"
              className="flex items-center space-x-2 hover:scale-110 duration-300 ease-in-out"
            >
              <FaCalendarAlt className="text-lg hover:text-blue-400" />
              <span>Daily</span>
            </Link>
            <Link
              to="/favorite"
              className="flex items-center space-x-2 hover:scale-110 duration-300 ease-in-out"
            >
              <FaHeart className="text-lg hover:text-red-600" />
              <span>Favorite</span>
            </Link>
            <Link
              to="/suggested"
              className="flex items-center space-x-2 hover:scale-110 duration-300 ease-in-out"
            >
              <FaBell className="text-lg hover:text-yellow-300" />
              <span>Suggested For You</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto flex justify-center gap-6 mt-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`text-gray-700 dark:text-gray-300 ${link.bgColor} p-3 rounded-full transition-all hover:scale-110`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Back to Top Button */}
      <div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-200"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        <p>
          © {date} <strong>QalbConnect</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
