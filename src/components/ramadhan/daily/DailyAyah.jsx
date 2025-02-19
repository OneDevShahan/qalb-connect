import { useEffect, useState } from "react";
import { fetchDailyAyah } from "../../services/AlQuranCloudAPIServices";
import { FaBookOpen } from "react-icons/fa"; // Quran Icon

const DailyAyah = () => {
  const [ayah, setAyah] = useState(null);

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
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-2 text-center">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <FaBookOpen className="text-blue-500" /> Daily Ayah
      </h2>
      <blockquote className="text-lg font-medium italic text-gray-800 dark:text-gray-200">
        &quot;{ayah.text}&quot;
      </blockquote>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        - Surah {ayah.surah.englishName} ({ayah.numberInSurah})
      </p>
    </div>
  );
};

export default DailyAyah;
