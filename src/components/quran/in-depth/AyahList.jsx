import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { LuClipboardCopy } from "react-icons/lu";
import SearchBar from "../../base/SearchBar";
const AyahList = ({ ayahs }) => {

  const [searchQuery, setSearchQuery] = useState("");
  // Filter Ayahs based on the search query
  const filteredAyahs = ayahs?.filter((ayah) =>
    ayah.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
    
  return (
    <>
      <div className="p-4">
        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          size="medium"
              />
              
        {/* Detailed Surah Info */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6">
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            This Surah is an important part of the Quran, revealed during the{" "}
             period, providing key lessons on [general
            message or teaching of the Surah].
          </div>

          {/* Ayahs - Filtered based on search query */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Ayahs
            </h3>
            {filteredAyahs && filteredAyahs.length > 0 ? (
              filteredAyahs.map((ayah) => (
                <div key={ayah.number} className="my-6">
                  <div className="text-lg text-gray-800 dark:text-white">
                    <p className="text-lg font-semibold">Ayah {ayah.number}:</p>
                    <p className="italic text-green-500">{ayah.text}</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}
                  </p>
                  <div className="flex items-center space-x-2 my-2 dark:text-white">
                    <LuClipboardCopy
                      size={20}
                      className="cursor-pointer hover:text-yellow-300"
                      title="Copy Ayah"
                      //onClick={() => handleCopyAyah(ayah)}
                    />
                    <AiFillAudio
                      size={20}
                      className="cursor-pointer hover:text-green-500"
                      title="Read Ayah Loud"
                      //onClick={() => handleReadAyahLoud(ayah.text)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-bold text-2xl text-red-500">
                No Ayah detail match your search criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

AyahList.propTypes = {
  ayahs: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AyahList;
