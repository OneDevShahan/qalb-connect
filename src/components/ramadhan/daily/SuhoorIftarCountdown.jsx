import { useEffect, useState } from "react";
import CountdownTimer from "../../utility/CountdownTimer";

const SuhoorIftarCountdown = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPrayerTimes = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
      );
      const data = await response.json();
      return {
        suhoor: data.data.timings.Fajr,
        iftar: data.data.timings.Maghrib,
      };
    } catch (error) {
      console.error("Failed to fetch prayer times:", error);
      return null;
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const times = await fetchPrayerTimes(latitude, longitude);
        if (times) {
          setPrayerTimes(times);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">⏳ Suhoor & Iftar Countdown</h2>
      {loading ? (
        <p>Loading...</p>
      ) : prayerTimes ? (
        <div className="mt-3 space-y-4">
          <div>
            <h3 className="text-md font-semibold">🌙 Suhoor (Fajr)</h3>
            <CountdownTimer targetTime={prayerTimes.suhoor} label="" />
          </div>
          <div>
            <h3 className="text-md font-semibold">🌅 Iftar (Maghrib)</h3>
            <CountdownTimer targetTime={prayerTimes.iftar} label="" />
          </div>
        </div>
      ) : (
        <p>Could not fetch prayer times.</p>
      )}
    </div>
  );
};

export default SuhoorIftarCountdown;
