import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const TasbeehInput = ({ newTasbeeh, setNewTasbeeh, addTasbeeh }) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-lg mb-4">
      <input
        type="text"
        placeholder=" Add new Tasbeeh..."
        value={newTasbeeh}
        onChange={(e) => setNewTasbeeh(e.target.value)}
        className="flex-1 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
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

TasbeehInput.propTypes = {
  newTasbeeh: PropTypes.string.isRequired,
  setNewTasbeeh: PropTypes.func.isRequired,
  addTasbeeh: PropTypes.func.isRequired,
};

export default TasbeehInput;
