import { useState } from "react";
import { getFromStorage, saveToStorage } from "../utility/Utils";

const TasbeehCounter = () => {
  const [count, setCount] = useState(getFromStorage("tasbeehCount", 0));

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveToStorage("tasbeehCount", newCount);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Tasbeeh Counter</h2>
      <p>{count}</p>
      <button
        onClick={increment}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        +1
      </button>
    </div>
  );
};

export default TasbeehCounter;
