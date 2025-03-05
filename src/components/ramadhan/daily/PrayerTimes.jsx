import { useEffect, useState } from "react";
import DailyReminder from "./DailyReminder";
import PropTypes from "prop-types";
import { getCurrentTime } from "../../utility/Utils";

const PrayerTimes = ({ data }) => {
  const [timings, setTimings] = useState(null);
  const [hijriDate, setHijriDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [testTime, setTestTime] = useState(getCurrentTime);

  useEffect(() => {
    if (data && data.data) {
      setTimings(data.data.timings);
      setHijriDate(data.data.date.hijri);
      setLoading(false);
    }
  }, [data]);

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

      {hijriDate && (
        // -1 as the Ramadhan started on 1st March but actually it started on2nd March {hijriDate.day - 1}{" "}
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          📅 Hijri Date: {hijriDate.day - 1} {hijriDate.month.en}{" "}
          {hijriDate.year}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
        {timings &&
          Object.entries({
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

        <div className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm relative">
          <span className="font-semibold text-sm">Test Time</span>
          <input
            type="time"
            value={testTime}
            onChange={(e) => setTestTime(e.target.value)}
            className="m-2 text-lg font-medium text-gray-900 dark:text-gray-100 bg-transparent border border-green-400 rounded focus:outline-none"
          />
          <DailyReminder time={testTime} />
        </div>
      </div>
    </div>
  );
};

const PrayerTime = ({ label, time }) => (
  <div className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm relative">
    <span className="font-semibold text-sm">{label}</span>
    <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
      {time}
    </span>
    <DailyReminder time={time} />
  </div>
);

PrayerTime.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

PrayerTimes.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      timings: PropTypes.object.isRequired,
      date: PropTypes.shape({
        hijri: PropTypes.shape({
          day: PropTypes.string.isRequired,
          month: PropTypes.shape({
            en: PropTypes.string.isRequired,
          }).isRequired,
          year: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  }),
};

export default PrayerTimes;
