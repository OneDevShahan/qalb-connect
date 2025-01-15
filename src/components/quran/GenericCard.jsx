import React from "react";

const GenericCard = ({ title, description, onClick }) => {
  return (
    <div
      className="max-w-xs mx-auto bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidden 
      transition-all transform hover:scale-105 flex flex-col h-full duration-300 ease-in-out"
    >
      <div className="p-6 flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        {/* <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center"> */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 text-center">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="p-4">
        <button
          onClick={onClick}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
          py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all 
          duration-300 ease-in-out shadow-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default GenericCard;
