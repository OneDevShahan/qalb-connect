import PropTypes from "prop-types";
import DailyProgressRow from "./DailyProgressRow";

const DailyProgressTable = ({
  dailyProgress,
  todayRamadhanDay,
}) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <th className="p-2 border-b dark:border-gray-600">Day</th>
            <th className="p-2 border-b dark:border-gray-600">Progress</th>
            <th className="p-2 border-b dark:border-gray-600">Checklist</th>
          </tr>
        </thead>
        <tbody>
          {dailyProgress.length > 0 ? (
            dailyProgress.map((data) =>
              data ? ( // Ensure data is not null
                <DailyProgressRow
                  key={data.day}
                  data={data}
                  todayRamadhanDay={todayRamadhanDay}
                />
              ) : null
            )
          ) : (
            <tr>
              <td
                colSpan="3"
                className="text-center text-gray-500 dark:text-gray-300 p-4"
              >
                No progress data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

DailyProgressTable.propTypes = {
  dailyProgress: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      checklist: PropTypes.object.isRequired,
    })
  ).isRequired,
  todayRamadhanDay: PropTypes.number.isRequired,
  updateChecklist: PropTypes.func.isRequired,
};

export default DailyProgressTable;
