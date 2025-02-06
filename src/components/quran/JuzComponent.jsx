import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { PiBookBookmark } from "react-icons/pi";
import LoadingIcon from "../base/LoadingIcon";
import SearchBar from "../base/SearchBar";
import { fetchJuzData } from "../services/AlQuranCloudAPIServices";
import AyahDetails from "./in-depth/AyahDetails";

const JuzComponent = ({ showToast }) => {
  const [juz, setJuz] = useState(30);
  const [edition, setEdition] = useState("en.asad");
  const [juzData, setJuzData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getJuzData = async () => {
      setLoading(true);
      try {
        const data = await fetchJuzData(juz, edition);
        setJuzData(data);
      } catch (err) {
        console.error("Error fetching Juz data: ", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    getJuzData();
  }, [juz, edition]);

  const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
  };

  /**
   * Filters a given Surah's ayahs based on the search query.
   *
   * If the search query matches any of the Surah's details (for example:
   * englishName, name, englishNameTranslation, or revelationType), then all
   * of that Surah's ayah details are returned.
   *
   * Otherwise, only the ayahs whose text includes the query are returned.
   *
   * @param {Object} surah - The Surah object containing details about the Surah.
   * @param {Array} ayahs - An array of ayah objects for the given Surah.
   * @param {string} query - The search query.
   * @returns {Array} - The filtered array of ayah objects.
   */
  const filterSurahAndAyahs = (surah, ayahs, query) => {
    if (!query.trim()) return ayahs;

    const lowerCaseQuery = query.toLowerCase();

    // Check if any Surah detail matches the query.
    const surahMatches =
      (surah.englishName &&
        surah.englishName.toLowerCase().includes(lowerCaseQuery)) ||
      (surah.name && surah.name.toLowerCase().includes(lowerCaseQuery)) ||
      (surah.englishNameTranslation &&
        surah.englishNameTranslation.toLowerCase().includes(lowerCaseQuery)) ||
      (surah.revelationType &&
        surah.revelationType.toLowerCase().includes(lowerCaseQuery));

    if (surahMatches) {
      // If the Surah details match, return all its ayah details.
      return ayahs;
    }

    // Otherwise, filter ayahs by their text.
    return ayahs.filter((ayah) =>
      ayah.text.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const renderSurahInfo = (surah) => (
    <div
      key={surah.number}
      className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow text-center"
    >
      <h3 className="font-semibold text-lg dark:text-white">
        {surah.number}. {surah.englishName} ({surah.name})
      </h3>
      <p className="text-sm dark:text-gray-400 mt-1">
        {surah.englishNameTranslation} - {surah.revelationType} -{" "}
        {surah.numberOfAyahs} Ayahs
      </p>
    </div>
  );

  return (
    <div className="p-6 min-h-screen dark:bg-gray-800">
      <h2 className="m-2 text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <PiBookBookmark size={25} className="mx-2 text-lg text-green-500" />
          Quran Juz Viewer
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-1/2 md:w-1/5 mt-3 mb-10 dark:border-gray-600" />
        </div>
      </h2>

      <div className="mb-6 text-sm text-gray-800 dark:text-white">
        <p>
          The Quran is divided into 30 sections called Juz. Each Juz is further
          divided into two halves, making a total of 60 Hizb. This division
          helps in reciting the Quran in smaller portions, making it easier to
          complete the entire Quran in a month. The Juz Viewer allows you to
          select a Juz and view its content. You can search for specific Surahs
          or Ayahs using the search bar below.
        </p>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex justify-center items-center mb-6 space-x-6">
        <select
          value={juz}
          onChange={(e) => setJuz(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          {[...Array(30).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Juz {num + 1}
            </option>
          ))}
        </select>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="en.asad">Muhammad Asad (English)</option>
          <option value="quran-uthmani">Uthmani Script (Arabic)</option>
        </select>
      </div>

      <div className="overflow-y-auto max-h-[500px] md:mb-10 md:p-2">
        {loading ? (
          <div className="flex flex-col items-center justify-center text-red-500">
            <div className="mb-2 text-green-500 dark:text-green-400">
              Data is loading...
            </div>
            <LoadingIcon height="h-20" width="w-20" color="red" />
          </div>
        ) : error ? (
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
        ) : juzData ? (
          <div className="space-y-4">
            {Object.values(juzData.surahs).map((surah) => {
              // Get all ayahs for the current surah.
              const surahAyahs = juzData.ayahs.filter(
                (ayah) => ayah.surah.number === surah.number
              );
              // Apply the filtering for both surah and ayah details.
              const filteredAyahs = filterSurahAndAyahs(
                surah,
                surahAyahs,
                searchQuery
              );

              // Render the Surah only if there is at least one matching ayah.
              if (filteredAyahs.length === 0) return null;

              return (
                <div key={surah.number}>
                  {renderSurahInfo(surah)}
                  <AyahDetails
                    ayahs={{
                      ...surah,
                      ayahs: filteredAyahs,
                    }}
                    handleReadAyahLoud={handleReadAyahLoud}
                    searchQuery={searchQuery}
                    showToast={showToast}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="font-bold text-center text-red-500 dark:text-red-400">
            Select a Juz to view its content.
          </p>
        )}
      </div>
    </div>
  );
};

JuzComponent.propTypes = {
  showToast: PropTypes.func.isRequired,
};

export default JuzComponent;
