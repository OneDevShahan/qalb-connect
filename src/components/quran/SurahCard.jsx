import { useState } from "react";
import { GiSpellBook } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingIcon from "../base/LoadingIcon";
import SearchBar from "../base/SearchBar";

const SurahCard = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Replaced useHistory with useNavigate
  const { data } = location.state; // Get passed data from the navigation state
  const [loadingSurah, setLoadingSurah] = useState(null); // Tracks loading state for each Surah
  const [searchSurah, setSearchSurah] = useState(""); // Search query for filtering Surahs

  // Filter Surahs based on multiple criteria
  const filteredSurahs = data.surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchSurah.toLowerCase()) || // Arabic Name
      surah.englishName.toLowerCase().includes(searchSurah.toLowerCase()) || // English Name
      surah.englishNameTranslation
        .toLowerCase()
        .includes(searchSurah.toLowerCase()) || // English Translation
      surah.revelationType.toLowerCase().includes(searchSurah.toLowerCase()) // Revelation Type
  );

  const handleButtonClick = async (surah) => {
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
          <GiSpellBook size={25} className="mr-2 text-green-500" />
          Surah Details{" "}
          {filteredSurahs.length > 0 && `(${filteredSurahs.length})`}
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-2/4 md:w-1/4 mt-3 mb-8" />
        </div>
      </h2>

      {/* Component Write-Up */}
      <div className="mb-6 text-sm text-gray-800 dark:text-white">
        <p>
          The following Surahs from the Quran have been carefully selected to
          showcase a variety of themes and teachings. These Surahs are revealed
          at different times and have their own unique context and message. Feel
          free to explore each Surah&apos;s verses and their meanings below.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchSurah}
        setSearchQuery={setSearchSurah}
        size="medium"
      />

      {/* Surah Info - Grid layout for Surah Cards */}
      {filteredSurahs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSurahs.map((surah) => (
            <div
              key={surah.number}
              className="flex flex-col p-6 mb-6 shadow-2xl rounded-xl bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
            >
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {surah.number}. {surah.englishName}
                </h2>
                <p className="mt-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                  Name: {surah.name}
                </p>
                <p className="mt-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                  Translated: {surah.englishNameTranslation}
                </p>
                <p className="mt-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                  Revelation Type: {surah.revelationType}
                </p>
              </div>

              {/* Button to navigate to AyahCard */}
              <div className="mt-6">
                <button
                  onClick={() => handleButtonClick(surah)}
                  className={`w-full flex items-center justify-center px-4 py-2 
                  bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md
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
                      {/* Show loading icon when loading */}
                      <LoadingIcon size="1.25em" color="yellow" />{" "}
                    </>
                  ) : (
                    <p className="text-white">View Detailed Ayahs</p> // Text when not loading
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-2xl text-red-500">
          No Surahs match your search criteria.
        </p>
      )}
    </div>
  );
};

export default SurahCard;
