import { useEffect, useState } from "react";
import RamadhanChecklistBoard from "./checklist/RamadhanChecklistBoard";
import DailyAyah from "./daily/DailyAyah";
import PrayerTimes from "./daily/PrayerTimes";
import SuhoorIftarCountdown from "./daily/SuhoorIftarCountdown";
import HijriDate from "./HijriDate";
import RamadhanGoals from "./RamadhanGoals";
import TasbeehDetails from "./zikr/TasbeehDetails";
import { fetchDailyData } from "../services/AlAdhaanServices";

function RamadhanDashboard() {
  const [prayerData, setPrayerData] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Your browser does not support location services.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchDailyData(latitude, longitude);
          setPrayerData(data);
          localStorage.setItem("prayerData", JSON.stringify(data)); // Store backup
        } catch (error) {
          console.error("Failed to fetch prayer times:", error);
          const cachedData = localStorage.getItem("prayerData");
          if (cachedData) {
            setPrayerData(JSON.parse(cachedData)); // Fallback to stored data
          } else {
            setLocationError("Could not fetch prayer times. Try again later.");
          }
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.warn("Geolocation error:", error.message);
        setLocationError(
          "Location access denied. Please enable location services in your browser settings."
        );
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          🌙 Ramadhan Dashboard
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-3/5 sm:w-1/2 md:w-1/4 mt-3 mb-8" />
        </div>
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Ramadhan is the ninth month of the Islamic calendar, observed by Muslims
        worldwide as a month of fasting, prayer, reflection, and community.
      </p>

      {/* Loading and Error Handling */}
      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Loading data...
        </p>
      ) : locationError ? (
        <p className="text-center text-red-500">{locationError}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mx-auto p-4">
          <HijriDate />
          <DailyAyah />
          {prayerData && <PrayerTimes data={prayerData} />}
          <SuhoorIftarCountdown />
          <RamadhanChecklistBoard />
          <RamadhanGoals />
          <TasbeehDetails />
        </div>
      )}
    </div>
  );
}

export default RamadhanDashboard;
