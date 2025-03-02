import { motion } from "framer-motion";
import { FaPaypal, FaInstagram, FaTwitter, FaShareAlt } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const SupportUs = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl mx-auto border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Support Our Islamic Project 🤲
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your support helps us maintain and improve this platform for the
          Ummah. Donate or share to help us reach more people!
        </p>

        {/* Donation Buttons */}
        <motion.div
          className="flex gap-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://www.buymeacoffee.com/onedevshahan"
            target="_blank"
            className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all font-semibold"
          >
            <SiBuymeacoffee size={22} /> Buy Me a Coffee
          </a>
          <a
            href="https://www.paypal.com/donate/?yourlink"
            target="_blank"
            className="flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all font-semibold"
          >
            <FaPaypal size={22} /> Donate via PayPal
          </a>
        </motion.div>

        {/* Social Media Share */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-300 mt-4">
          <a
            href="https://x.com/shahanahmad7"
            target="_blank"
            className="hover:text-blue-400 transition-all"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="https://www.instagram.com/shahanahmad321/"
            target="_blank"
            className="hover:text-pink-500 transition-all"
          >
            <FaInstagram size={26} />
          </a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="flex items-center gap-2 bg-gray-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all font-semibold"
          >
            <FaShareAlt size={22} /> Share
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SupportUs;
