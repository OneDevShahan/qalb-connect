import { useState } from "react";
import { GiSpellBook } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingIcon from "../base/LoadingIcon";

const SurahCard = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Replaced useHistory with useNavigate
  const { data } = location.state; // Get passed data from the navigation state
  const [loadingSurah, setLoadingSurah] = useState(null); // Tracks loading state for each Surah

  const handleButtonClick = async (surah) => {
    console.log("Surah:", surah);
    setLoadingSurah(surah.number); // Set the loading state for the clicked Surah
    try {
      navigate("/ayah-details", { state: { surah } });
      setLoadingSurah(null); // Reset loading state after navigation
    } catch (error) {
      console.error("Error loading Surah:", error);
      setLoadingSurah(null); // Reset loading state on error
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <GiSpellBook size={25} className="mr-2 hover:text-green-400" />
          Surah Details
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-2/4 md:w-1/6 mt-3 mb-8" />
        </div>
      </h2>

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
              className={`w-full flex items-center justify-center px-4 py-2 
             bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md
             hover:from-green-500 hover:to-green-700 
             ${
               loadingSurah === surah.number
                 ? "bg-gray-400 cursor-not-allowed" // When loading, disable the button
                 : "bg-red-500 hover:bg-red-600"
             } // If not loading, set a red button color
             transition-colors duration-300 ease-in-out`} // Smooth transition for color changes
              disabled={loadingSurah === surah.number} // Disable button when loading
            >
              {loadingSurah === surah.number ? (
                <>
                  <LoadingIcon size="1.25em" />{" "}
                  {/* Show loading icon when loading */}
                </>
              ) : (
                <p className="text-white">View Detailed Ayahs</p> // Text when not loading
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurahCard;
