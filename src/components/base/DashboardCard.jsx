import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingIcon from "../base/LoadingIcon";

const DashboardCard = ({ title, desc, link, icon, fact, tagline }) => {
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulated loading effect
  };

  return (
    <div
      className="w-80 min-h-[20rem] flex flex-col shadow-xl rounded-2xl p-5 border border-gray-300 
      dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300"
    >
      {/* Card Header (Icon + Title + Tooltip) */}
      <div className="flex flex-col items-center text-center relative">
        <span className="text-4xl mb-2 text-gray-700 dark:text-gray-300">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 italic">
          {tagline}
        </p>

        {/* Tooltip for Fact */}
        {fact && (
          <div className="relative inline-block">
            <button
              className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer underline focus:outline-none"
              onClick={() => setShowTooltip(!showTooltip)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Did You Know?
            </button>
            {showTooltip && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg 
                px-3 py-2 shadow-md mt-1 w-56 z-10 transition-opacity duration-300"
              >
                {fact}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Description Section */}
      <div className="flex-1 flex items-center justify-center text-center px-3 mt-3">
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {showMore ? (
            <>
              {desc}{" "}
              <button
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            </>
          ) : desc.length > 60 ? (
            <>
              {desc.slice(0, 60)}...
              <button
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                onClick={() => setShowMore(true)}
              >
                More
              </button>
            </>
          ) : (
            desc
          )}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Link to={link} className="block">
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-800 
            text-white px-4 py-2 rounded-lg hover:from-green-500 hover:to-green-700 active:scale-95 transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? <LoadingIcon color="white" /> : "Know More"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
