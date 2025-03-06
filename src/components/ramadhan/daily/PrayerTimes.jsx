import React from "react";
import { useEffect, useState, useMemo } from "react";
import DailyReminder from "./DailyReminder";
import PropTypes from "prop-types";
import { getCurrentTime } from "../../utility/Utils";

const PrayerTimes = ({ data }) => {
  const [prayerData, setPrayerData] = useState(() => ({
    timings: null,
    hijriDate: null,
  }));
  const [loading, setLoading] = useState(true);
  const [testTime, setTestTime] = useState(getCurrentTime);

  useEffect(() => {
    if (data?.data) {
      setPrayerData({
        timings: data.data.timings,
        hijriDate: data.data.date.hijri,
      });
      setLoading(false);
    }
  }, [data]);

  const prayerEntries = useMemo(() => {
    if (!prayerData.timings) return [];
    return Object.entries({
      Fajr: prayerData.timings.Fajr,
      Sunrise: prayerData.timings.Sunrise,
      Dhuhr: prayerData.timings.Dhuhr,
      Asr: prayerData.timings.Asr,
      Sunset: prayerData.timings.Sunset,
      Maghrib: prayerData.timings.Maghrib,
      Isha: prayerData.timings.Isha,
      Imsak: prayerData.timings.Imsak,
      Midnight: prayerData.timings.Midnight,
      "First Third": prayerData.timings.Firstthird,
      "Last Third": prayerData.timings.Lastthird,
    });
  }, [prayerData.timings]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading prayer times...
        </p>
      </div>
    );
  }

  if (!prayerData.timings) {
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

      {prayerData.hijriDate && (
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          📅 Hijri Date: {prayerData.hijriDate.day}{" "}
          {prayerData.hijriDate.month.en} {prayerData.hijriDate.year}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
        {prayerEntries.map(([label, time]) => (
          <MemoizedPrayerTime key={label} label={label} time={time} />
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

const MemoizedPrayerTime = React.memo(PrayerTime);

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
