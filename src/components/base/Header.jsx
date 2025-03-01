import { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaHeart,
  FaKaaba,
  FaMoon,
  FaMosque,
  FaSun,
  FaTimes,
} from "react-icons/fa"; // Icons for dark mode
import { FaBookQuran, FaPersonPraying } from "react-icons/fa6";
import { HiOutlineCalculator } from "react-icons/hi";
import { PiBookBookmark } from "react-icons/pi";
import { RiCompass3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { GiPrayer, GiSpellBook } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownOptions = [
    {
      title: "Quran",
      links: [
        {
          label: "All",
          path: "/quran-dashboard",
          icon: <FaBookQuran className="text-green-500" />,
        },
        {
          label: "Juz",
          path: "/juz-details",
          icon: <PiBookBookmark className="text-green-500" />,
        },
        {
          label: "Surahs",
          path: "/surah-list",
          icon: <GiSpellBook className="text-green-500" />,
        },
      ],
    },
    {
      title: "Duas",
      links: [
        {
          label: "All",
          path: "/all-dua",
          icon: <GiPrayer className="text-gray-500" />,
        },
        {
          label: "Daily",
          path: "/daily",
          icon: <FaCalendarAlt className="text-blue-400" />,
        },
        {
          label: "Favorite",
          path: "/favorite",
          icon: <FaHeart className="text-red-600" />,
        },
        {
          label: "Reminder",
          path: "/reminder",
          icon: <FaBell className="text-yellow-300" />,
        },
      ],
    },
    {
      title: "Ramadhan",
      links: [
        {
          label: "All",
          path: "/ramadhan",
          icon: <FaMosque className="text-gray-500" />,
        },
        {
          label: "Calculate",
          path: "/zakat",
          icon: <HiOutlineCalculator className="text-red-400" />,
        },
        {
          label: "Qibla",
          path: "/find-qibla",
          icon: <RiCompass3Line className="text-green-500" />,
        },
      ],
    },
    {
      title: "Zakah",
      links: [
        {
          label: "Calculate",
          path: "/zakat",
          icon: <HiOutlineCalculator className="text-red-400" />,
        },
        {
          label: "Qibla",
          path: "/find-qibla",
          icon: <RiCompass3Line className="text-green-500" />,
        },
        {
          label: "All",
          path: "/all-dua",
          icon: <FaPersonPraying className="text-gray-500" />,
        },
      ],
    },
    {
      title: "Hajj",
      links: [
        {
          label: "All",
          path: "/all-dua",
          icon: <FaKaaba className="text-gray-500" />,
        },
        {
          label: "Calculate",
          path: "/zakat",
          icon: <HiOutlineCalculator className="text-red-400" />,
        },
        {
          label: "Qibla",
          path: "/find-qibla",
          icon: <RiCompass3Line className="text-green-500" />,
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          label: "Qibla",
          path: "/find-qibla",
          icon: <RiCompass3Line className="text-green-500" />,
        },
        {
          label: "All",
          path: "/all-dua",
          icon: <FaPersonPraying className="text-gray-500" />,
        },
        {
          label: "Support Us",
          path: "/support-us",
          icon: <HiOutlineCalculator className="text-red-400" />,
        },
      ],
    },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white shadow-lg transition-all">
      {/* Logo / App Name (Left) */}
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
          <div className="gradient-heading text-3xl font-bold ml-2">
            QalbConnect
          </div>
        </Link>
      </div>

      {/* Middle Navigation */}
      <nav className="hidden md:flex space-x-6 flex-grow justify-center">
        {dropdownOptions.map((section, index) => (
          <div key={index} className="relative group">
            <span className="cursor-pointer">{section.title}</span>
            <div className="absolute left-0 top-4 rounded-lg hidden mt-2 space-y-4 bg-gray-700 p-4 group-hover:block">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="block hover:text-green-500 duration-200"
                >
                  <div className="flex justify-start items-center">
                    <p className="mr-2">{link.icon}</p>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div>
        {/* Dark Mode Toggle (Right) */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}{" "}
          {/* Toggle between sun and moon */}
        </button>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown (Full Screen) */}
      {isMenuOpen && (
        <MobileMenu dropdownOptions={dropdownOptions} toggleMenu={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
