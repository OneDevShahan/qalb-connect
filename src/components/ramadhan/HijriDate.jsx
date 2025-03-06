import { useEffect, useState, useMemo } from "react";

const HijriDate = () => {
  const [dateData, setDateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("dailyData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.data?.data) {
          setDateData(parsedData.data.data);
        }
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const isLaylatulQadr = useMemo(() => {
    if (!dateData) return false;
    const { hijri } = dateData.date;
    const specialDays = ["21", "23", "25", "27", "29"];
    return (
      hijri.month.en === "Ramadan" &&
      specialDays.includes((hijri.day).toString())
    );
  }, [dateData]);

  if (loading)
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading Hijri Date...
        </p>
      </div>
    );

  if (!dateData)
    return (
      <p className="text-red-500 text-center font-semibold">
        ⚠️ Failed to load Hijri Date
      </p>
    );

  const { hijri, gregorian } = dateData.date;
  const { weekday, month, year, holidays } = hijri;

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-center transition ${
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
        ({hijri.day}-{hijri.month.number}-{hijri.year} -{" "}
        {hijri.designation.expanded})
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
