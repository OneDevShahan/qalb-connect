import React from "react";
import { FaBell, FaHeart } from "react-icons/fa";

const DuaCard = ({ name, arabic, translations, benefits }) => {
  // Ensure translations is an array
  const translationsArray = Array.isArray(translations)
    ? translations
    : Object.entries(translations).map(([language, text]) => ({
        language,
        text,
      }));

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
      <div className="p-6 flex-1">
        {/* Title Section */}
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white">
          {name.urdu} | {name.hindi} | {name.english}
        </h3>

        {/* Arabic Text */}
        <p className="text-3xl md:text-4xl font-extrabold text-right mt-6 text-gray-900 dark:text-white">
          {arabic}
        </p>

        {/* Translations */}
        <div className="mt-6 space-y-3">
          {translationsArray.map((translation, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <span className="font-bold">{translation.language}:</span>{" "}
              {translation.text}
            </p>
          ))}
        </div>

        {/* Benefits */}
        <p className="mt-8 text-gray-800 dark:text-gray-200 italic text-sm md:text-base">
          {benefits}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
        <button className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-5 py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 ease-in-out shadow-md">
          <FaHeart />
          Favorite
        </button>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-2 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out shadow-md">
          <FaBell />
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default DuaCard;
