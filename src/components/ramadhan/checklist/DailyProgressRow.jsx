import PropTypes from "prop-types";
import { CHECK_LIST_ITEMS } from "../../utility/Contant";

const DailyProgressRow = ({ data, todayRamadhanDay }) => {
  const { day, percentage, checklist } = data;

  return (
    <tr className="border-b border-gray-300 dark:border-gray-600 text-center">
      <td
        className={`p-2 font-bold ${
          parseInt(todayRamadhanDay, 10) === day
            ? "text-blue-600 dark:text-blue-400"
            : ""
        }`}
      >
        {day}
      </td>
      <td className="p-2 text-green-600 dark:text-green-400">{percentage}%</td>
      <td className="p-2">
        <div className="grid grid-cols-2 gap-2">
          {CHECK_LIST_ITEMS.map((item) => (
            <span
              key={item}
              className={
                checklist[item]
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }
            >
              {item}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
};

DailyProgressRow.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    checklist: PropTypes.object.isRequired,
  }).isRequired,
  todayRamadhanDay: PropTypes.number.isRequired,
};

export default DailyProgressRow;
