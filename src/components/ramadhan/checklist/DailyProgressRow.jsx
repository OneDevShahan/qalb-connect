import PropTypes from "prop-types";
import { CHECK_LIST_ITEMS_WITH_ICONS } from "../../utility/Contant";

const DailyProgressRow = ({ data, todayRamadhanDay }) => {
  const { day, percentage, checklist } = data;

  console.log("📅 Day:", day, "📈 Ramdhan Day:",todayRamadhanDay);
  return (
    <tr className="border-b border-gray-300 dark:border-gray-600 text-center text-sm md:text-base">
      <td
        className={`p-2 font-bold dark:text-white ${
          todayRamadhanDay === day ? "text-blue-600 dark:text-blue-400" : ""
        }`}
      >
        {todayRamadhanDay === day ? `🔥 Today (${day})` : `📅 Day ${day}`}
      </td>
      <td className="p-2 font-semibold dark:text-white">
        {percentage === 100 ? "🌟 Completed!" : `📈 ${percentage}%`}
      </td>
      <td className="p-2">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {CHECK_LIST_ITEMS_WITH_ICONS.map(({ text, icon }) => (
            <span
              key={text}
              // onClick={() => {
              //   console.log(
              //     `Updating Day: ${day}, Item: ${text}, New Value: ${!checklist[
              //       text
              //     ]}`
              //   );
              //   updateChecklist(day, text, !checklist[text]);
              // }}
              className={`cursor-pointer ${
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
  updateChecklist: PropTypes.func.isRequired,
};

export default DailyProgressRow;
