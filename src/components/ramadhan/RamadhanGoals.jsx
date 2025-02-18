import { useState, useEffect } from "react";

const RamadhanGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  // Load goals from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("ramadhanGoals")) || [];
    setGoals(savedGoals);
  }, []);

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("ramadhanGoals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal("");
    }
  };

  const toggleGoalCompletion = (index) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  const removeGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">🎯 Ramadhan Goals</h2>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add a goal..."
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addGoal}
          className="p-2 bg-green-500 text-white rounded"
        >
          ➕ Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {goals.map((goal, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 border rounded ${
              goal.completed ? "bg-green-200 dark:bg-green-700" : ""
            }`}
          >
            <span
              className={`cursor-pointer ${
                goal.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleGoalCompletion(index)}
            >
              {goal.text}
            </span>
            <button onClick={() => removeGoal(index)} className="text-red-500">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RamadhanGoals;
