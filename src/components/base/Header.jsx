import React, { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHeart,
  FaCalendarAlt,
  FaBell,
} from "react-icons/fa"; // Import necessary icons
import { Link } from "react-router-dom"; // Correct import for React Router links

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg transition-all">
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-extrabold text-blue-500">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-blue-400 transition-all"
          >
            QalbConnect
          </Link>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-6">
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-lg" />
          <Link
            to="/daily"
            className="text-lg font-semibold hover:text-blue-400 transition-all"
          >
            Daily
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaHeart className="text-lg" />
          <Link
            to="/favorite"
            className="text-lg font-semibold hover:text-blue-400 transition-all"
          >
            Favorite
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaBell className="text-lg" />
          <Link
            to="/reminder"
            className="text-lg font-semibold hover:text-blue-400 transition-all"
          >
            Reminder
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="ml-4 text-2xl transition-all">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-6 top-16 bg-white dark:bg-gray-700 rounded-lg shadow-md z-10 w-48">
          <Link
            to="/daily"
            className="block px-6 py-3 text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaCalendarAlt className="inline-block mr-2" />
            Daily
          </Link>
          <Link
            to="/favorite"
            className="block px-6 py-3 text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaHeart className="inline-block mr-2" />
            Favorite
          </Link>
          <Link
            to="/reminder"
            className="block px-6 py-3 text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaBell className="inline-block mr-2" />
            Reminder
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
