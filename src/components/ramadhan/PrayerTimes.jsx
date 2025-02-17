import { useEffect, useState } from "react";
import { fetchPrayerTimes } from "../services/AlAdhaanServices";
import CountdownTimer from "./CountdownTimer";

const PrayerTimes = () => {
  const [timings, setTimings] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchPrayerTimes(latitude, longitude).then(setTimings);
    });
  }, []);

  if (!timings) return <p>Loading prayer times...</p>;

  const today = new Date().toISOString().split("T")[0]; // Get today's date
  const now = new Date();

  // Format Suhoor & Iftar times as timestamps
  let suhoorTime = new Date(`${today}T${timings.Fajr}`);
  let iftarTime = new Date(`${today}T${timings.Maghrib}`);

  // If Suhoor has passed, set for the next day
  if (now > suhoorTime) {
    suhoorTime.setDate(suhoorTime.getDate() + 1);
  }

  // If Iftar has passed, set for the next day
  if (now > iftarTime) {
    iftarTime.setDate(iftarTime.getDate() + 1);
  }

  // Convert Date objects to strings
  const suhoorTimeString = suhoorTime.toISOString();
  const iftarTimeString = iftarTime.toISOString();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Prayer Timings</h2>
      <p>Suhoor: {timings.Fajr}</p>
      <p>Iftar: {timings.Maghrib}</p>

      {/* Countdown for Suhoor & Iftar */}
      <CountdownTimer targetTime={suhoorTimeString} label="Suhoor" />
      <CountdownTimer targetTime={iftarTimeString} label="Iftar" />
    </div>
  );
};

export default PrayerTimes;
