import { useEffect, useState } from "react";
import { fetchHijriDate } from "../services/AlAdhaanServices";

const HijriDate = () => {
  const [hijriDate, setHijriDate] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchHijriDate(latitude, longitude).then(setHijriDate);
      },
      () => setHijriDate({ error: "Unable to get location." })
    );
  }, []);

  if (!hijriDate) return <p>Loading Hijri Date...</p>;
  if (hijriDate.error) return <p className="text-red-500">{hijriDate.error}</p>;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Today&apos;s Hijri Date</h2>
      <p>{`${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year}`}</p>
    </div>
  );
};

export default HijriDate;
