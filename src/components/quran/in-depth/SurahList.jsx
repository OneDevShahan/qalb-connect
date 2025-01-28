import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingIcon from "../../base/LoadingIcon";
import { fetchSurahList } from "../../services/AlQuranCloudAPIServices";
import { GiSpellBook } from "react-icons/gi";

const SurahList = ({ showToast }) => {
  const [surahList, setSurahList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSurahList();
        setSurahList(data);
      } catch (err) {
        setError("Failed to load Surah list. Please try again later.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCopyAyah = (ayah) => {
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    // Use a timeout to ensure no state updates occur during another render
    setTimeout(
      () => showToast("Ayah details copied to clipboard!", "success"),
      0
    );
  };

  const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
  };

  // Filter Ayahs based on the search query
  const filteredAyahs = surahList.ayahs?.filter((ayah) =>
    ayah.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <div>
        <LoadingIcon /> Loading...
      </div>
    );
  if (error) return <div className="font-bold text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <GiSpellBook size={25} className="mr-2 text-green-500" />
          Surah Details {surahList.length > 0 && `(${surahList.length})`}
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

      {/* Detailed Surah List Info */}
      {surahList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {surahList.map((surah) => (
            <Link
              to={`/surah/${surah.number}`}
              key={surah.number}
              aria-label={`Read Surah ${surah.englishName}`}
              className="flex flex-col p-6 mb-6 shadow-2xl rounded-xl bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
            >
              <p className="text-xl font-bold text-center text-gray-800 dark:text-white">
                <strong className="text-green-500">{surah.name}</strong>
              </p>
              <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
                Arabic:
                <strong className="mx-2 font-semibold"> {surah.name}</strong>
              </div>
              <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
                English:
                <p className="mx-2 font-semibold"> {surah.englishName}</p>
              </div>
              <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
                Translated:
                <p className="mx-2 font-semibold">
                  {" "}
                  {surah.englishNameTranslation}
                </p>
              </div>
              <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
                Revelation Type:
                <p className="mx-2 font-semibold"> {surah.revelationType}</p>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                This Surah is an important part of the Quran, revealed during
                the {surah.revelationType} period, providing key lessons on
                [general message or teaching of the Surah].
              </div>
            </Link>
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

export default SurahList;
