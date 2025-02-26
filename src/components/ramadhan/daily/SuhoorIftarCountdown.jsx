import { useEffect, useState } from "react";
import CountdownTimer from "../../utility/CountdownTimer";
import { fetchDailyData } from "../../services/AlAdhaanServices";

const SuhoorIftarCountdown = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const data = await fetchDailyData(latitude, longitude);
        if (data) {
          setPrayerTimes({
            suhoor: data.data.timings.Fajr,
            iftar: data.data.timings.Maghrib,
          });
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
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center">
      {/* Centered Heading */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        ⏳ Suhoor & Iftar Countdown
      </h2>

      {loading ? (
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      ) : prayerTimes ? (
        <div className="mt-3 space-y-6">
          {/* Suhoor Section */}
          <div className="p-4 bg-white dark:bg-gray-900 rounded-md shadow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              🌙 Suhoor (Fajr)
            </h3>
            <CountdownTimer targetTime={prayerTimes.suhoor} label="" />
            <div className="mt-2 text-sm italic text-gray-600 dark:text-gray-300">
              <p>
                  &quot; وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ &quot;
              </p>
              <p>
                &quot;I intend to fast tomorrow for Ramadan.&quot;
              </p>
            </div>
          </div>

          {/* Iftar Section */}
          <div className="p-4 bg-white dark:bg-gray-900 rounded-md shadow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              🌅 Iftar (Maghrib)
            </h3>
            <CountdownTimer targetTime={prayerTimes.iftar} label="" />
            <div className="mt-2 text-sm italic text-gray-600 dark:text-gray-300">
              <p>&quot;اللهم لك صمت وعلى رزقك أفطرت &quot; </p>
              <p>
                &quot;O Allah! I have fasted for You, and I break my fast with
                Your sustenance.&quot;
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          Could not fetch prayer times.
        </p>
      )}
    </div>
  );
};

export default SuhoorIftarCountdown;
