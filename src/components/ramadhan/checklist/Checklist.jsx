import { useEffect } from "react";
import { FaUndoAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Checklist = ({
  checklistItems,
  checklist,
  toggleItem,
  completion,
  resetChecklist,
}) => {
  useEffect(() => {
    const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");
    const today = new Date().toISOString().split("T")[0]; // Get current date (YYYY-MM-DD)

    if (lastUpdatedDate !== today) {
      resetChecklist(); // Reset checkboxes if it's a new day
      localStorage.setItem("lastUpdatedDate", today); // Update last reset date
    }
  }, [resetChecklist]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 text-center">
        📋 Ramadhan Daily Checklist
      </h2>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mb-3">
        <div
          className="h-4 rounded-full bg-green-500 transition-all"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
      <p className="text-sm font-semibold mb-3 text-center">
        ✅ Completed: {completion}%
      </p>

      <ul className="text-left">
        {checklistItems.map(({ text, icon }) => (
          <li key={text} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={!!checklist[text]}
              onChange={() => toggleItem(text)}
              className="w-4 h-4"
            />
            <span className="text-sm">
              {icon} {text}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4">
        <button
          onClick={resetChecklist}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaUndoAlt /> Reset Checklist
        </button>
      </div>
    </div>
  );
};

Checklist.propTypes = {
  checklistItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  checklist: PropTypes.object.isRequired,
  toggleItem: PropTypes.func.isRequired,
  completion: PropTypes.number.isRequired,
  resetChecklist: PropTypes.func.isRequired,
};

export default Checklist;
