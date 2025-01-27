import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingIcon from "../../base/LoadingIcon";
import { fetchSurahList } from "../../services/AlQuranCloudAPIServices";

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
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        

        {/* Detailed Surah Info */}
        {surahList.map((surah) => (
          <Link
            to={`/surah/${surah.number}`}
            key={surah.number}
            aria-label={`Read Surah ${surah.englishName}`}
            className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6"
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
              This Surah is an important part of the Quran, revealed during the{" "}
              {surah.revelationType} period, providing key lessons on [general
              message or teaching of the Surah].
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SurahList;
