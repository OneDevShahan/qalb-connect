"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

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
    <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul>
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
        <div>
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p>
            QalbConnect is a platform for sharing Duas, Islamic content, and
            spiritual resources. It offers a rich collection of Duas, Quranic
            verses, and hadiths, fostering a community of learning and
            connection to support users in their spiritual journey.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Categories</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Daily
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Favorite
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Suggested for You
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto flex justify-center gap-6 mt-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`text-gray-700 dark:text-gray-300 ${link.bgColor} p-3 rounded-full transition-all`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-6">
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-200"
        >
          Back to Top
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
