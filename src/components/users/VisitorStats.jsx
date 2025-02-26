import { FaUsers } from "react-icons/fa";
import VisitorTooltip from "./VisitorTooltip";

const VisitorStats = ({ visitorCount, currentLocation, lastLocation }) => {
  return (
    <div
      className="w-80 min-h-[22rem] flex flex-col shadow-xl rounded-2xl p-5 border border-gray-300 
      dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300"
    >
      {/* Card Header */}
      <div className="flex flex-col items-center text-center">
        <FaUsers className="text-4xl mb-2 text-green-600 dark:text-green-400" />
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Unique Visitors
        </h3>
        <VisitorTooltip />
      </div>

      {/* Visitor Count */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-3">
        <p className="text-4xl font-bold text-green-600 dark:text-green-400">
          {visitorCount}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          People have visited this site!
        </p>
      </div>

      {/* Current Visitor Location */}
      <div className="mt-auto">
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Your Current Location:
        </p>
        <p className="text-lg font-medium text-gray-800 dark:text-white text-center">
          {currentLocation}
        </p>
      </div>

      {/* Last Visitor Location */}
      <div className="mt-2">
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Last Visitor Location:
        </p>
        <p className="text-lg font-medium text-gray-800 dark:text-white text-center">
          {lastLocation}
        </p>
      </div>
    </div>
  );
};

export default VisitorStats;
