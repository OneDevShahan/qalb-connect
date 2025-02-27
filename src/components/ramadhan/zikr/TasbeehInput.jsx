import { FaPlus } from "react-icons/fa";

const TasbeehInput = ({ newTasbeeh, setNewTasbeeh, addTasbeeh }) => {
  return (
    <div className="flex flex-wrap gap-2 w-full max-w-lg">
      <input
        type="text"
        placeholder="Add new Tasbeeh..."
        value={newTasbeeh}
        onChange={(e) => setNewTasbeeh(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={addTasbeeh}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
      >
        <FaPlus /> Add
      </button>
    </div>
  );
};

export default TasbeehInput;
