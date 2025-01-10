// DuaCard.jsx
import React from "react";

const DuaCard = ({ name, arabic, translations, benefits }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {name.urdu} | {name.hindi} | {name.english}
        </h3>
        <div className="mt-2">
          <p className="text-2xl font-bold text-right">{arabic}</p>
          {translations.map((translation, index) => (
            <p key={index} className="text-sm text-gray-600 dark:text-gray-300">
              {translation.language}: {translation.text}
            </p>
          ))}
        </div>
        <p className="mt-4 text-gray-800 dark:text-gray-200">{benefits}</p>
      </div>
      <div className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Favorite
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default DuaCard;
