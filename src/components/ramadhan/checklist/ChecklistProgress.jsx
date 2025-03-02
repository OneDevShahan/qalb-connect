import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import DailyProgressTable from "./DailyProgressTable";
import { CHECK_LIST_ITEMS_WITH_ICONS } from "../../utility/Contant";
import useHijriDate from "../../services/useHijriDate";

const ChecklistProgress = () => {
  const [dailyProgress, setDailyProgress] = useState([]);
  const [overallCompletion, setOverallCompletion] = useState(0);
  const todayRamadhanDay = useHijriDate();

  useEffect(() => {
    let totalPercentage = 0;
    let dailyData = [];

    for (let day = 1; day <= 30; day++) {
      const savedChecklist = localStorage.getItem(`ramadhanChecklistDay${day}`);
      let checklist = {};
      let completedItems = [];
      let percentage = 0;

      if (savedChecklist) {
        checklist = JSON.parse(savedChecklist);

        // Ensure all checklist items are present in the saved data
        CHECK_LIST_ITEMS_WITH_ICONS.forEach(({ text }) => {
          if (!(text in checklist)) {
            checklist[text] = false;
          }
        });

        localStorage.setItem(
          `ramadhanChecklistDay${day}`,
          JSON.stringify(checklist)
        );

        completedItems = Object.keys(checklist).filter((key) => checklist[key]);
        percentage = Math.round(
          (completedItems.length / CHECK_LIST_ITEMS_WITH_ICONS.length) * 100
        );
        totalPercentage += percentage;
      } else {
        // Initialize checklist with default false values
        checklist = CHECK_LIST_ITEMS_WITH_ICONS.reduce(
          (acc, { text }) => ({ ...acc, [text]: false }),
          {}
        );
        localStorage.setItem(
          `ramadhanChecklistDay${day}`,
          JSON.stringify(checklist)
        );
      }
      dailyData.push({ day, percentage, checklist });
    }

    setDailyProgress(dailyData);
    setOverallCompletion(Math.round(totalPercentage / 30));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
        📅 Ramadhan Progress Tracker
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Track your progress throughout Ramadhan and see how much you’ve
        achieved!
      </p>

      {todayRamadhanDay ? (
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            📅 Today is Ramadhan Day {todayRamadhanDay}
          </h3>
        </div>
      ) : (
        <p className="text-center text-red-500 dark:text-red-400 mt-4">
          Unable to determine today&apos;s Ramadhan day.
        </p>
      )}

      <ProgressBar completion={overallCompletion} />
      <DailyProgressTable
        dailyProgress={dailyProgress}
        todayRamadhanDay={todayRamadhanDay}
      />
    </div>
  );
};

export default ChecklistProgress;
