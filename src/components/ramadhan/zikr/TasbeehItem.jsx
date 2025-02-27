import { FaPlus, FaUndoAlt, FaTrash } from "react-icons/fa";

const TasbeehItem = ({
  tasbeeh,
  count,
  increment,
  resetCount,
  deleteTasbeeh,
  isDefault,
}) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md min-w-[180px] transition-transform hover:scale-105">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {tasbeeh}
      </h3>
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        {count}
      </p>

      <div className="flex flex-nowrap justify-center gap-2 mt-2 w-full">
        <button
          onClick={increment}
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaPlus /> <span className="font-bold text-lg">1</span>
        </button>
        <button
          onClick={resetCount}
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaUndoAlt /> Reset
        </button>
      </div>

      {!isDefault && (
        <button
          onClick={deleteTasbeeh}
          className="mt-2 flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg shadow-md transition-all"
        >
          <FaTrash /> Delete
        </button>
      )}
    </div>
  );
};

export default TasbeehItem;
