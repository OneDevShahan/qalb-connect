import React, { useEffect, useState, useRef } from "react";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHeart,
  FaCalendarAlt,
  FaBell,
  FaChevronDown,
  FaChevronRight,
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

  const positionSubmenu = (submenu) => {
    if (submenu && submenuRef.current) {
      const rect = submenu.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (rect.right > windowWidth) {
        submenu.style.left = "auto";
        submenu.style.right = "100%";
      } else {
        submenu.style.left = "100%";
        submenu.style.right = "auto";
      }
    }
  };

  const renderMoreMenu = (isMobile = false) => (
    <div
      className={`absolute top-full left-0 ${
        isMobile ? "mt-0" : ""
      } bg-white dark:bg-gray-700 rounded-lg shadow-lg w-56 z-10`}
      onMouseEnter={() => setDesktopMoreMenuOpen(true)}
      onMouseLeave={() => setDesktopMoreMenuOpen(false)}
    >
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
          className="relative px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
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
              } bg-white dark:bg-gray-700 rounded-lg shadow-lg w-56 z-20`}
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
        className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Page 4
      </Link>
    </div>
  );

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg transition-all">
      <div className="text-2xl font-extrabold text-blue-500">
        <Link to="/" className="hover:text-blue-400 transition-all">
          QalbConnect
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 items-center relative">
        <Link to="/daily" className="flex items-center space-x-2">
          <FaCalendarAlt className="text-lg" />
          <span>Daily</span>
        </Link>
        <Link to="/favorite" className="flex items-center space-x-2">
          <FaHeart className="text-lg" />
          <span>Favorite</span>
        </Link>
        <Link to="/reminder" className="flex items-center space-x-2">
          <FaBell className="text-lg" />
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
            <div className="absolute top-full left-0 bg-white dark:bg-gray-700 rounded-lg shadow-lg w-56 z-10 mt-2">
              <Link
                to="/path1/page11"
                className="block px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-600"
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

      <button onClick={toggleDarkMode} className="text-2xl">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <button
        className="md:hidden block text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute right-6 top-16 bg-white dark:bg-gray-700 rounded-lg shadow-md z-10 w-48">
          <Link to="/daily" className="flex items-center px-6 py-3 space-x-2">
            <FaCalendarAlt className="text-lg" />
            <span>Daily</span>
          </Link>
          <Link
            to="/favorite"
            className="flex items-center px-6 py-3 space-x-2"
          >
            <FaHeart className="text-lg" />
            <span>Favorite</span>
          </Link>
          <Link
            to="/reminder"
            className="flex items-center px-6 py-3 space-x-2"
          >
            <FaBell className="text-lg" />
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
