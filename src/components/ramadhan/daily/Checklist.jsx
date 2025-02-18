const Checklist = ({
  checklistItems,
  checklist,
  toggleItem,
  completion,
  resetChecklist,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">
        📋 Ramadhan Daily Checklist
      </h2>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mb-3">
        <div
          className="h-4 rounded-full bg-green-500 transition-all"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
      <p className="text-sm font-semibold mb-3">✅ Completed: {completion}%</p>

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

      <button
        onClick={resetChecklist}
        className="mt-3 px-3 py-1 bg-red-500 text-white rounded-lg"
      >
        Reset Checklist
      </button>
    </div>
  );
};

export default Checklist;
