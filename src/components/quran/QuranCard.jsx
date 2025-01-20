import { useState } from "react";
import PropTypes from "prop-types";
import LoadingIcon from "../base/LoadingIcon";

const QuranCard = ({ title, description, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true); // Start loading
    await onClick(); // Call the provided onClick function
    setIsLoading(false); // Stop loading
  };

  return (
    <div
      className="flex flex-col h-full max-w-xs mx-auto bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidden"
    >
      <div className="p-6 flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 text-center">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="p-4">
        <button
          onClick={handleButtonClick}
          className={`flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg hover:from-green-500 hover:to-green-700 `}
          disabled={isLoading}
        >
          {isLoading ? <LoadingIcon /> : "View Details"}
        </button>
      </div>
    </div>
  );
};

QuranCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default QuranCard;
