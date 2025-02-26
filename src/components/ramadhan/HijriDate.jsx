import { useEffect, useState } from "react";
import { fetchDailyData } from "../services/AlAdhaanServices";

const HijriDate = () => {
  const [dateData, setDateData] = useState(null);
  const [isLaylatulQadr, setIsLaylatulQadr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const data = await fetchDailyData(latitude, longitude); // Fetch data with caching

      if (data) {
        setDateData(data.data); // Ensure correct data structure
        // Check if it's Laylatul Qadr (Only in Ramadan)
        const hijri = data.data.date.hijri;
        const specialDays = ["21", "23", "25", "27", "29"];
        if (hijri.month.en === "Ramadan" && specialDays.includes(hijri.day)) {
          setIsLaylatulQadr(true);
        }
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading Hijri Date...
        </p>
      </div>
    );

  if (!dateData) return <p>Failed to load Hijri Date</p>;

  const { hijri, gregorian } = dateData.date;
  const { weekday, month, year, holidays } = hijri;

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-center ${
        isLaylatulQadr
          ? "bg-yellow-300 text-black"
          : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        📆 Islamic Date
      </h2>

      {/* Hijri Date */}
      <div className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
        {weekday.en}, {hijri.day} {month.en} {year} AH
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ({hijri.date} - {hijri.designation.expanded})
      </p>

      {/* Gregorian Date */}
      <div className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
        {gregorian.weekday.en}, {gregorian.day} {gregorian.month.en}{" "}
        {gregorian.year} AD
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ({gregorian.date} - {gregorian.designation.expanded})
      </p>

      {/* Holidays */}
      {holidays.length > 0 && (
        <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">
          <h3 className="font-semibold">📜 Islamic Holiday</h3>
          <ul className="list-disc list-inside text-sm">
            {holidays.map((holiday, index) => (
              <li key={index}>{holiday}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Special Laylatul Qadr Message */}
      {isLaylatulQadr && (
        <p className="mt-3 text-red-600 font-bold text-lg">
          ✨ Laylatul Qadr Tonight! ✨
        </p>
      )}
    </div>
  );
};

export default HijriDate;
