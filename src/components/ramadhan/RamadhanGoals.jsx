import { useState, useEffect, useCallback, useMemo } from "react";
import { FaPlus } from "react-icons/fa";

const RamadhanGoals = () => {
  const [goals, setGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("ramadhanGoals")) || [];
  });
  const [newGoal, setNewGoal] = useState("");

  // Save goals to localStorage only when goals change
  useEffect(() => {
    localStorage.setItem("ramadhanGoals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = useCallback(() => {
    if (newGoal.trim()) {
      setGoals((prevGoals) => {
        const updatedGoals = [
          ...prevGoals,
          { text: newGoal, completed: false },
        ];
        localStorage.setItem("ramadhanGoals", JSON.stringify(updatedGoals)); // Save immediately
        return updatedGoals;
      });
      setNewGoal("");
    }
  }, [newGoal]);

  const toggleGoalCompletion = useCallback((index) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.map((goal, i) =>
        i === index ? { ...goal, completed: !goal.completed } : goal
      );
      localStorage.setItem("ramadhanGoals", JSON.stringify(updatedGoals)); // Save immediately
      return updatedGoals;
    });
  }, []);

  const removeGoal = useCallback((index) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((_, i) => i !== index);
      localStorage.setItem("ramadhanGoals", JSON.stringify(updatedGoals)); // Save immediately
      return updatedGoals;
    });
  }, []);

  const renderedGoals = useMemo(
    () =>
      goals.map((goal, index) => (
        <li
          key={goal.text} // Avoid index as key to minimize re-renders
          className={`flex justify-between items-center p-3 border rounded-lg shadow-sm transition-all ${
            goal.completed
              ? "bg-green-200 dark:bg-green-700"
              : "bg-gray-50 dark:bg-gray-900"
          }`}
        >
          <span
            className={`cursor-pointer flex-1 ${
              goal.completed
                ? "line-through text-gray-500 dark:text-gray-300"
                : "text-gray-800 dark:text-white"
            }`}
            onClick={() => toggleGoalCompletion(index)}
          >
            {goal.text}
          </span>
          <button
            onClick={() => removeGoal(index)}
            className="text-red-500 hover:text-red-600 transition-all"
          >
            ❌
          </button>
        </li>
      )),
    [goals, toggleGoalCompletion, removeGoal]
  );

  return (
    <div className="p-6 max-w-lg w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
        🎯 Ramadhan Goals
      </h2>

      {/* Input Section */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-4">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder=" Add a goal..."
          className="flex-1 w-full py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addGoal}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
        >
          <FaPlus /> Add
        </button>
      </div>

      {/* Goals List */}
      <ul className="mt-5 space-y-3">{renderedGoals}</ul>

      {/* No Goals Message */}
      {goals.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
          No goals added yet. Start by adding one above!
        </p>
      )}
    </div>
  );
};

export default RamadhanGoals;
