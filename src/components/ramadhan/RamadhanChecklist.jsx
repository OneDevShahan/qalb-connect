import { useState } from "react";

const RamadhanChecklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Suhoor", done: false },
    { id: 2, task: "Fajr Prayer", done: false },
    { id: 3, task: "Dhuhr Prayer", done: false },
    { id: 4, task: "Asr Prayer", done: false },
    { id: 5, task: "Maghrib (Iftar)", done: false },
    { id: 6, task: "Isha & Taraweeh", done: false },
    { id: 7, task: "Recite Quran", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Ramadhan Checklist</h2>
      <ul className="list-none">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4"
            />
            <span className={task.done ? "line-through text-gray-500" : ""}>
              {task.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RamadhanChecklist;
