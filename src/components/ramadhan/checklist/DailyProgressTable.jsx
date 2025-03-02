import DailyProgressRow from "./DailyProgressRow";
import PropTypes from "prop-types";

const DailyProgressTable = ({ dailyProgress, todayRamadhanDay }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <th className="p-2">Ramadhan Day</th>
            <th className="p-2">Completion (%)</th>
            <th className="p-2">Checklist</th>
          </tr>
        </thead>
        <tbody>
          {dailyProgress.map((dayData) => (
            <DailyProgressRow
              key={dayData.day}
              data={dayData}
              todayRamadhanDay={todayRamadhanDay}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
DailyProgressTable.propTypes = {
  dailyProgress: PropTypes.arrayOf(PropTypes.object).isRequired,
  todayRamadhanDay: PropTypes.number.isRequired,
};

export default DailyProgressTable;
