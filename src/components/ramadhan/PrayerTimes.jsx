import { useEffect, useState } from "react";
import { fetchPrayerTimes } from "../services/AlAdhaanServices";

const PrayerTimes = () => {
  const [timings, setTimings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchPrayerTimes(latitude, longitude)
          .then(setTimings)
          .catch(() => setError("Failed to fetch prayer times."));
      },
      () => setError("Unable to retrieve your location.") // ✅ Handle permission denial
    );
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!timings) return <p>Loading prayer times...</p>;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Prayer Timings</h2>
      <p>Suhoor: {timings.Fajr}</p>
      <p>Iftar: {timings.Maghrib}</p>
    </div>
  );
};

export default PrayerTimes;
