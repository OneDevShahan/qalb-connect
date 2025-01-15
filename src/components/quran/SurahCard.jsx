import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SurahCard = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Replaced useHistory with useNavigate
  const { data } = location.state; // Get passed data from the navigation state

  const handleButtonClick = (surah) => {
    console.log("Surah:", surah);
    // Navigate to the AyahCard component with Surah details
    navigate("/ayah-details", { state: { surah } }); // Use navigate for routing in v6
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Surah Details
      </h1>

      {/* Component Write-Up */}
      <div className="mb-6 text-lg text-gray-800 dark:text-white">
        <p>
          The following Surahs from the Quran have been carefully selected to
          showcase a variety of themes and teachings. These Surahs are revealed
          at different times and have their own unique context and message. Feel
          free to explore each Surah's verses and their meanings below.
        </p>
      </div>

      {/* Surah Info - Loop through all Surahs */}
      {data.surahs.map((surah) => (
        <div
          key={surah.number}
          className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {surah.englishName} ({surah.englishNameTranslation})
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Revelation Type: {surah.revelationType}
          </p>
          {/* Write-up about Surah */}
          <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
            This Surah is an important part of the Quran, revealed during the{" "}
            {surah.revelationType} period, providing key lessons on [general
            message or teaching of the Surah].
          </p>

          {/* Button to navigate to AyahCard */}
          <div className="mt-6">
            <button
              onClick={() => handleButtonClick(surah)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Detailed Ayahs
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurahCard;
