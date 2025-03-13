import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// Lazy-load icons from react-icons
const FaArrowUp = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaArrowUp }))
);
const FaEnvelope = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaEnvelope }))
);
const FaGithub = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaGithub }))
);
const FaInstagram = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaInstagram }))
);
const FaLinkedinIn = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaLinkedinIn }))
);
const FaTwitter = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaTwitter }))
);
const FaBookQuran = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaBookQuran }))
);
const FaKaaba = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaKaaba }))
);
const FaPersonPraying = lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaPersonPraying,
  }))
);
const HiOutlineCalculator = lazy(() =>
  import("react-icons/hi").then((module) => ({
    default: module.HiOutlineCalculator,
  }))
);
const RiCompass3Line = lazy(() =>
  import("react-icons/ri").then((module) => ({
    default: module.RiCompass3Line,
  }))
);
const SiBuymeacoffee = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiBuymeacoffee,
  }))
);

const Footer = () => {
  const date = new Date().getFullYear(); // Directly get the year

  // Define social links with icons wrapped in Suspense
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <FaLinkedinIn size={15} />
        </Suspense>
      ),
      url: "https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <FaGithub size={15} />
        </Suspense>
      ),
      url: "https://github.com/OneDevShahan",
      bgColor: "bg-gray-400 hover:bg-gray-800",
    },
    {
      name: "Twitter",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <FaTwitter size={15} />
        </Suspense>
      ),
      url: "https://x.com/shahanahmad7",
      bgColor: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "Email",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <FaEnvelope size={15} />
        </Suspense>
      ),
      url: "mailto:shahanahmad321@gmail.com",
      bgColor: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Instagram",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <FaInstagram size={15} />
        </Suspense>
      ),
      url: "https://www.instagram.com/shahanahmad321/",
      bgColor: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "BuyMeaCoffee",
      icon: () => (
        <Suspense fallback={<div style={{ width: 15, height: 15 }} />}>
          <SiBuymeacoffee size={15} />
        </Suspense>
      ),
      url: "https://www.buymeacoffee.com/onedevshahan",
      bgColor: "bg-yellow-400 hover:bg-yellow-500",
    },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="space-y-2">
            <li>
              <span>Email: </span>
              <a
                href="mailto:onedevshahan@gmail.com"
                className="underline hover:text-blue-200"
              >
                onedevshahan@gmail.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <a
                href="tel:+918445470641"
                className="underline hover:text-blue-200"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              to="/quran-dashboard"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
                <FaBookQuran className="text-lg text-green-500" />
              </Suspense>
              <span>Quran</span>
            </Link>
            <Link
              to="/ramadhan-dashboard"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <span role="img" aria-label="Ramadhan">
                🌙
              </span>
              <span>Ramadhan</span>
            </Link>
            <Link
              to="/dua-dashboard"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
                <FaPersonPraying className="text-lg text-gray-400" />
              </Suspense>
              <span>Dua</span>
            </Link>
            <Link
              to="/hajj-dashboard"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
                <FaKaaba className="text-gray-600 dark:text-gray-300" />
              </Suspense>
              <span>Hajj</span>
            </Link>
            <Link
              to="/zakat"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
                <HiOutlineCalculator className="text-lg text-red-400" />
              </Suspense>
              <span>Zakat</span>
            </Link>
            <Link
              to="/find-qibla"
              className="flex items-center space-x-2 hover:scale-110 transition-transform"
            >
              <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
                <RiCompass3Line className="mr-1 text-lg text-green-500" />
              </Suspense>
              <span>Qibla</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto flex justify-center gap-4 mt-8">
        {socialLinks.map(({ name, icon, url, bgColor }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`inline-flex items-center justify-center text-white ${bgColor} p-3 rounded-full transition hover:scale-110`}
          >
            {icon()}
          </a>
        ))}
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-end fixed bottom-6 right-6">
        <button
          onClick={scrollToTop}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
          aria-label="Back to Top"
        >
          <Suspense fallback={<div style={{ width: 20, height: 20 }} />}>
            <FaArrowUp className="text-lg" />
          </Suspense>
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-white pt-4">
        <p>
          © {date} <strong>QalbConnect</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
