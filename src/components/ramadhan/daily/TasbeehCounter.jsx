import { useState, useEffect } from "react";
import { FaPlus, FaUndoAlt, FaTrash, FaPrayingHands } from "react-icons/fa";

// Default tasbeehs that cannot be deleted
const defaultTasbeehs = [
  "SubhanAllah",
  "Alhamdulillah",
  "AllahuAkbar",
  "La ilaha illallah",
  "Astaghfirullah",
];

// Utility functions for local storage
const getFromStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

const saveToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const TasbeehCounter = () => {
  const [tasbeehs, setTasbeehs] = useState(
    getFromStorage(
      "tasbeehs",
      Object.fromEntries(defaultTasbeehs.map((t) => [t, 0]))
    )
  );
  const [newTasbeeh, setNewTasbeeh] = useState("");

  useEffect(() => {
    saveToStorage("tasbeehs", tasbeehs);
  }, [tasbeehs]);

  const increment = (key) => {
    setTasbeehs((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const resetCount = (key) => {
    setTasbeehs((prev) => ({ ...prev, [key]: 0 }));
  };

  const resetAll = () => {
    const resetTasbeehs = Object.keys(tasbeehs).reduce(
      (acc, key) => ({ ...acc, [key]: 0 }),
      {}
    );
    setTasbeehs(resetTasbeehs);
  };

  const addTasbeeh = () => {
    if (newTasbeeh.trim() && !tasbeehs[newTasbeeh]) {
      setTasbeehs((prev) => ({ ...prev, [newTasbeeh]: 0 }));
      setNewTasbeeh("");
    }
  };

  const deleteTasbeeh = (key) => {
    if (!defaultTasbeehs.includes(key)) {
      const updatedTasbeehs = { ...tasbeehs };
      delete updatedTasbeehs[key];
      setTasbeehs(updatedTasbeehs);
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
        <FaPrayingHands className="text-green-500" /> Tasbeeh Counter
      </h2>

      {/* Add new tasbeeh input */}
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

      {/* Tasbeeh Counters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {Object.entries(tasbeehs).map(([key, count]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md min-w-[180px] transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {key}
            </h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {count}
            </p>

            {/* Button Container - Ensures alignment on all screens */}
            <div className="flex flex-nowrap justify-center gap-2 mt-2 w-full">
              <button
                onClick={() => increment(key)}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                <FaPlus /> <span className="font-bold text-lg">1</span>
              </button>
              <button
                onClick={() => resetCount(key)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                <FaUndoAlt /> Reset
              </button>
            </div>

            {/* Delete Button (Only for non-default tasbeehs) */}
            {!defaultTasbeehs.includes(key) && (
              <button
                onClick={() => deleteTasbeeh(key)}
                className="mt-2 flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg shadow-md transition-all"
              >
                <FaTrash /> Delete
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Reset All Button */}
      <button
        onClick={resetAll}
        className="mt-4 flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        <FaUndoAlt /> Reset All
      </button>
    </div>
  );
};

export default TasbeehCounter;
