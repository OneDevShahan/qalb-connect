import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaTimes } from "react-icons/fa";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const RamadhanPopup = ({ onClose }) => {
  const { width, height } = useWindowSize();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 10000); // Auto-hide after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <Confetti width={width} height={height} numberOfPieces={300} />
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full text-center relative">
        <button
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
          onClick={() => setShow(false)}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          🌙 Ramadhan Mubarak! 🎉
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          May this holy month bring peace, blessings, and joy to you and your
          family.
        </p>
      </div>
    </div>
  );
};

export default RamadhanPopup;
