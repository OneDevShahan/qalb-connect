import React, { useEffect, useRef, useState } from "react";
import { BiSolidNavigation } from "react-icons/bi";
import {
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronRight,
  FaHeart,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMoreMenuOpen, setDesktopMoreMenuOpen] = useState(false);
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  const submenuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleSubMenu = (menu) => {
    setSubMenu((current) => (current === menu ? null : menu));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const renderMoreMenu = (isMobile = false) => (
    <div
      className={`absolute top-full left-0 ${
        isMobile ? "mt-0" : ""
      } bg-gray-700 dark:bg-gray-700 rounded-lg shadow-lg w-56 z-10`}
      onMouseEnter={() => setDesktopMoreMenuOpen(true)}
      onMouseLeave={() => setDesktopMoreMenuOpen(false)}
    >
      <Link
        to="/find-qibla"
        className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <div className="flex items-center">
          <BiSolidNavigation className="mr-2" />
          Find Qibla
        </div>
      </Link>
      {[
        { path: "path1", pages: [{ name: "Page 11", link: "/path1/page11" }] },
        {
          path: "path2",
          pages: [
            { name: "Page 21", link: "/path2/page21" },
            { name: "Page 22", link: "/path2/page22" },
          ],
        },
        {
          path: "path3",
          pages: [
            { name: "Page 31", link: "/path3/page31" },
            { name: "Page 32", link: "/path3/page32" },
            { name: "Page 33", link: "/path3/page33" },
          ],
        },
      ].map(({ path, pages }) => (
        <div
          key={path}
          className="relative px-6 py-3 hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer"
          onMouseEnter={!isMobile ? () => handleSubMenu(path) : null}
          onMouseLeave={!isMobile ? () => setSubMenu(null) : null}
          onClick={isMobile ? () => handleSubMenu(path) : null}
        >
          {path}
          <FaChevronRight className="inline ml-2 text-sm" />
          {subMenu === path && (
            <div
              ref={submenuRef}
              className={`absolute left-full top-0 ${
                isMobile ? "right-full" : ""
              } bg-gray-700 dark:bg-gray-700 rounded-lg shadow-lg w-56 z-20`}
              onMouseEnter={() => setSubMenu(path)} // Stay open when hovering over submenu
              onMouseLeave={() => setSubMenu(null)} // Close when mouse leaves submenu
            >
              {pages.map(({ name, link }) => (
                <Link
                  key={link}
                  to={link}
                  className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link
        to="/page4"
        className="block px-6 py-3 hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        Page 4
      </Link>
    </div>
  );

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white shadow-lg transition-all">
      <div className="text-2xl font-extrabold flex items-center">
        <Link
          to="/"
          className="hover:scale-105 duration-300 transition-all flex items-center"
        >
          <img
            src={isDarkMode ? "QalbConnect_Dark.svg" : "QalbConnect_Light.svg"}
            alt="QalbConnect Logo"
            className="h-12 w-12 text-black dark:text-white"
          />
          QalbConnect
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 items-center relative">
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
          to="/reminder"
          className="flex items-center space-x-2 hover:scale-110 duration-300 ease-in-out"
        >
          <FaBell className="text-lg hover:text-yellow-300" />
          <span>Reminder</span>
        </Link>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setDesktopMoreMenuOpen(true)}
          onMouseLeave={() => setDesktopMoreMenuOpen(false)}
        >
          <div className="flex items-center space-x-2">
            <span>Nested</span>
            <FaChevronDown />
          </div>
          {desktopMoreMenuOpen && renderMoreMenu()}
        </div>

        {/* Dropdown after More option */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2"
          >
            <span>Flat</span>
            <FaChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-gray-700 dark:bg-gray-700 rounded-lg shadow-lg w-56 z-10 mt-2">
              <Link
                to="/find-qibla"
                className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <BiSolidNavigation className="mr-2" />
                  Find Qibla
                </div>
              </Link>
              <Link
                to="/path1/page11"
                className="block px-6 py-3 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Page 11
              </Link>
              <Link
                to="/path2/page22"
                className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Page 22
              </Link>
              <Link
                to="/page4"
                className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Page 4
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="flex items-center space-x-6">
        <button onClick={toggleDarkMode} className="text-xl">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="md:hidden block text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-6 top-16 bg-white dark:bg-gray-700 rounded-lg shadow-md z-10 w-48">
          <Link to="/daily" className="flex items-center px-6 py-3 space-x-2">
            <FaCalendarAlt className="text-lg hover:text-blue-400" />
            <span>Daily</span>
          </Link>
          <Link
            to="/favorite"
            className="flex items-center px-6 py-3 space-x-2"
          >
            <FaHeart className="text-lg hover:text-red-600" />
            <span>Favorite</span>
          </Link>
          <Link
            to="/reminder"
            className="flex items-center px-6 py-3 space-x-2"
          >
            <FaBell className="text-lg hover:text-yellow-300" />
            <span>Reminder</span>
          </Link>
          <div
            className="flex items-center px-6 py-3 space-x-2 cursor-pointer"
            onClick={() => setMobileMoreMenuOpen(!mobileMoreMenuOpen)}
          >
            <span>More</span>
            <FaChevronDown />
          </div>
          {mobileMoreMenuOpen && renderMoreMenu(true)}
        </div>
      )}
    </header>
  );
};

export default Header;
