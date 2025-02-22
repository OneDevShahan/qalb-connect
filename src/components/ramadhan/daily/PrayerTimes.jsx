import { useEffect, useState } from "react";
import { fetchPrayerTimes } from "../../services/AlAdhaanServices";
import DailyReminder from "./DailyReminder";
import PropTypes from 'prop-types';

const PrayerTimes = () => {
  const [timings, setTimings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [testTime, setTestTime] = useState("15:10"); // Default test time

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
        {Object.entries({
          Fajr: timings.Fajr,
          Sunrise: timings.Sunrise,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Sunset: timings.Sunset,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
          Imsak: timings.Imsak,
          Midnight: timings.Midnight,
          "First Third": timings.Firstthird,
          "Last Third": timings.Lastthird,
        }).map(([label, time]) => (
          <PrayerTime key={label} label={label} time={time} />
        ))}

        {/* Test Time with input field */}
        <div className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm relative">
          <span className="font-semibold text-sm">Test Time</span>
          <input
            type="time"
            value={testTime}
            onChange={(e) => setTestTime(e.target.value)}
            className="text-lg font-medium text-gray-900 dark:text-gray-100 bg-transparent border border-gray-400 dark:border-gray-600 rounded p-1 focus:outline-none"
          />
          <DailyReminder time={testTime} />
        </div>
      </div>
    </div>
  );
};


const PrayerTime = ({ label, time }) => {
  return (
    <div className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm relative">
      <span className="font-semibold text-sm">{label}</span>
      <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
        {time}
      </span>
      {/* Bell Icon for setting reminder */}
      <DailyReminder time={time} />
    </div>
  );

};
PrayerTime.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default PrayerTimes;
