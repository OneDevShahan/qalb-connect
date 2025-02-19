import { useEffect, useState } from "react";
import { fetchPrayerTimes } from "../../services/AlAdhaanServices";

const PrayerTimes = () => {
  const [timings, setTimings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchPrayerTimes(latitude, longitude).then((data) => {
          setTimings(data);
          setLoading(false);
        });
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading prayer times...
        </p>
      </div>
    );
  }

  if (!timings) {
    return (
      <div className="text-center text-red-500 dark:text-red-400">
        Failed to fetch prayer times.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-xl">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
        🕌 Prayer Timings
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
        <PrayerTime label="Fajr" time={timings.Fajr} />
        <PrayerTime label="Sunrise" time={timings.Sunrise} />
        <PrayerTime label="Dhuhr" time={timings.Dhuhr} />
        <PrayerTime label="Asr" time={timings.Asr} />
        <PrayerTime label="Sunset" time={timings.Sunset} />
        <PrayerTime label="Maghrib" time={timings.Maghrib} />
        <PrayerTime label="Isha" time={timings.Isha} />
        <PrayerTime label="Imsak" time={timings.Imsak} />
        <PrayerTime label="Midnight" time={timings.Midnight} />
        <PrayerTime label="First Third" time={timings.Firstthird} />
        <PrayerTime label="Last Third" time={timings.Lastthird} />
      </div>
    </div>
  );
};

const PrayerTime = ({ label, time }) => (
  <div className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm">
    <span className="font-semibold text-sm">{label}</span>
    <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
      {time}
    </span>
  </div>
);

export default PrayerTimes;
