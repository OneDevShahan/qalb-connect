import { useEffect, useState } from "react";
import { fetchDailyAyah } from "../services/AlQuranCloudAPIServices";

const DailyAyah = () => {
  const [ayah, setAyah] = useState(null);

  useEffect(() => {
    fetchDailyAyah().then(setAyah);
  }, []);

  if (!ayah) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Daily Ayah</h2>
      <p>
        &quot;{ayah.text}&quot; - Surah {ayah.surah.englishName} ({ayah.numberInSurah})
      </p>
    </div>
  );
};

export default DailyAyah;
