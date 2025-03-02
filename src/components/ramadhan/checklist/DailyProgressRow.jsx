import PropTypes from "prop-types";
import { CHECK_LIST_ITEMS_WITH_ICONS } from "../../utility/Contant";

const DailyProgressRow = ({ data, todayRamadhanDay }) => {
  const { day, percentage, checklist } = data;

  return (
    <tr className="border-b border-gray-300 dark:border-gray-600 text-center text-sm md:text-base">
      <td
        className={`p-2 font-bold dark:text-white ${
          parseInt(todayRamadhanDay, 10) === day
            ? "text-blue-600 dark:text-blue-400"
            : ""
        }`}
      >
        {parseInt(todayRamadhanDay, 10) === day
          ? `🔥 Today (${day})`
          : `📅 Day ${day}`}
      </td>
      <td className="p-2 font-semibold dark:text-white">
        {percentage === 100 ? "🌟 Completed!" : `📈 ${percentage}%`}
      </td>
      <td className="p-2">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {CHECK_LIST_ITEMS_WITH_ICONS.map(({ text, icon }) => (
            <span
              key={text}
              className={`${
                checklist[text]
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              <span className="sm:hidden">{text}</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                {icon} {text}
              </span>
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
