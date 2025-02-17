import CountdownTimer from "./CountdownTimer";
import DailyAyah from "./DailyAyah";
import HijriDate from "./HijriDate";
import PrayerTimes from "./PrayerTimes";
import RamadhanChecklist from "./RamadhanChecklist";
import TasbeehCounter from "./TasbeehCounter";

function RamadhanDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🌙 Ramadhan Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <CountdownTimer targetTime="2025-02-28T00:00:00" label="Ramadhan" />
        <PrayerTimes />
        <DailyAyah />
        <TasbeehCounter />
        <HijriDate />
        <RamadhanChecklist />
      </div>
    </div>
  );
}

export default RamadhanDashboard;
