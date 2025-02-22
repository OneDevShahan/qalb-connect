import CountdownTimer from "../utility/CountdownTimer";
import DailyAyah from "./daily/DailyAyah";
import PrayerTimes from "./daily/PrayerTimes";
import RamadhanChecklist from "./daily/RamadhanChecklist";
import SuhoorIftarCountdown from "./daily/SuhoorIftarCountdown";
import TasbeehCounter from "./daily/TasbeehCounter";
import HijriDate from "./HijriDate";
import RamadhanGoals from "./RamadhanGoals";

function RamadhanDashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 space-y-6">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-center dark:text-white">
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            🌙 Ramadhan Dashboard
          </div>
          <div className="flex justify-center text-center">
            <hr className="text-center w-3/5 sm:w-1/2 md:w-1/4 mt-3 mb-8" />
          </div>
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          Ramadhan is the ninth month of the Islamic calendar, observed by
          Muslims worldwide as a month of fasting, prayer, reflection, and
          community.
        </p>
        <div className="text-center">
          <CountdownTimer targetTime="2025-02-28" label="Ramadhan in" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mx-auto p-4">
          <HijriDate />
          <DailyAyah />
          <PrayerTimes />
          <SuhoorIftarCountdown />
          <RamadhanChecklist />
          <RamadhanGoals />
          <TasbeehCounter />
        </div>
      </div>
    </>
  );
}

export default RamadhanDashboard;
