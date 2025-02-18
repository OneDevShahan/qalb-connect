import { useEffect, useState } from "react";
import { fetchDailyAyah } from "../../services/AlQuranCloudAPIServices";
import { fetchRandomHadith } from "../../services/fawazahmed0APIServices";

const DailyAyahHadith = () => {
  const [ayah, setAyah] = useState(null);
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toDateString();
    const savedAyah = localStorage.getItem("dailyAyah");
    const savedHadith = localStorage.getItem("dailyHadith");
    const savedDate = localStorage.getItem("ayahHadithDate");

    if (savedAyah && savedHadith && savedDate === today) {
      setAyah(savedAyah);
      setHadith(savedHadith);
      setLoading(false);
      console.log("Loaded from cache", ayah, hadith);
    } else {
      Promise.all([fetchDailyAyah(), fetchRandomHadith()]).then(
        ([newAyah, newHadith]) => {
          setAyah(newAyah);
          setHadith(newHadith);
          localStorage.setItem("dailyAyah", newAyah);
          localStorage.setItem("dailyHadith", newHadith);
          localStorage.setItem("ayahHadithDate", today);
          setLoading(false);
        }
      );
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">📖 Daily Ayah & Hadith</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-3 space-y-4">
          <div>
            <h3 className="text-md font-semibold">📜 Quranic Ayah</h3>
            <p className="italic">{ayah || "Could not fetch Ayah."}</p>
            <p>
              &quot;{ayah.text}&quot; - Surah {ayah} ({ayah.numberInSurah})
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold">📜 Hadith</h3>
            <p className="italic">{hadith || "Could not fetch Hadith."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyAyahHadith;
