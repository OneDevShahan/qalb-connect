import { useEffect, useState } from "react";
import axios from "axios";

const AL_ADHAAN_API_BASE_URL = import.meta.env.VITE_API_AL_ADHAAN_BASE_URL;

const HijriDate = () => {
  const [hijriDate, setHijriDate] = useState(null);
  const [isSpecialDay, setIsSpecialDay] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await axios.get(
          `${AL_ADHAAN_API_BASE_URL}/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        const hijri = response.data.data.date.hijri;

        setHijriDate(hijri);

        // Check for special Ramadhan days
        const specialDays = ["21", "23", "25", "27", "29"]; // Laylatul Qadr (27th Night)
        if (specialDays.includes(hijri.day)) {
          //setIsSpecialDay(true);
        }
      } catch (error) {
        console.error("Error fetching Hijri date:", error);
      }
    });
  }, []);

  if (!hijriDate) return <p>Loading Hijri Date...</p>;

  return (
    <div
      className={`p-4 rounded-lg shadow ${
        isSpecialDay
          ? "bg-yellow-300 text-black"
          : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <h2 className="text-lg font-semibold">📆 Islamic Date</h2>
      <p>
        {hijriDate.day} {hijriDate.month.en} {hijriDate.year} AH
      </p>
      {isSpecialDay && (
        <p className="text-red-600 font-bold">✨ Laylatul Qadr Tonight! ✨</p>
      )}
    </div>
  );
};

export default HijriDate;
