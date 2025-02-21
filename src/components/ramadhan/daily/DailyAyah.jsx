import { useEffect, useState } from "react";
import { fetchDailyAyah } from "../../services/AlQuranCloudAPIServices";
import { FaBookOpen, FaCopy, FaVolumeUp } from "react-icons/fa";

const DailyAyah = () => {
  const [ayah, setAyah] = useState(null);

  const handleCopyAyahDetails = () => {
    if (!ayah) return;
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    alert("Ayah details copied to clipboard!");
  };

  const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    fetchDailyAyah().then(setAyah);
  }, []);

  if (!ayah)
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading Ayah...
        </p>
      </div>
    );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-gray-200">
        <FaBookOpen className="text-blue-500" /> Daily Ayah
      </h2>

      <div className="mt-4">
        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {ayah.surah.name} ({ayah.surah.englishName})
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {ayah.surah.englishNameTranslation} - {ayah.surah.revelationType}
        </p>
      </div>

      <div className="mt-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md w-full">
        <p className="text-lg text-right font-arabic text-gray-900 dark:text-gray-100">
          {ayah.text}
        </p>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Surah {ayah.surah.number}, Ayah {ayah.numberInSurah} | Juz {ayah.juz} |
        Page {ayah.page}
      </p>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleCopyAyahDetails}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          <FaCopy /> Copy
        </button>
        <button
          onClick={handleReadAyahLoud(ayah.text)}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          <FaVolumeUp /> Read Aloud
        </button>
      </div>
    </div>
  );
};

export default DailyAyah;
