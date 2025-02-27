import { useState, useEffect } from "react";
import { FaPrayingHands, FaUndoAlt } from "react-icons/fa";
import TasbeehInput from "./TasbeehInput";
import TasbeehList from "./TasbeehList";

// Default tasbeehs that cannot be deleted
const defaultTasbeehs = [
  "Astaghfirullah",
  "SubhanAllah Wa Bihamdihi, SubhanAllahil Azim",
  "SubhanAllah Walhamdulillah, Wa La ilaha illallah, Wallahu Akbar, Wa La Hawla Wa La Quwwata illa Billahil Aliyil Azim",
  "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَّسُولُ ٱللَّٰهِ",
  "سُبْحَانَ ٱللَّٰهِ وَٱلْحَمْدُ لِلَّٰهِ وَلَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَٱللَّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ",
  "La ilaha illallah wahdahu la sharika lahu, lahul mulku wa lahul hamdu, yuhi wayomeet ",
];

// Utility functions for local storage
const getFromStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

const saveToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const TasbeehDetails = () => {
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

  const increment = (key) =>
    setTasbeehs((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  const resetCount = (key) => setTasbeehs((prev) => ({ ...prev, [key]: 0 }));

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
      setTasbeehs((prev) => {
        const updatedTasbeehs = { ...prev };
        delete updatedTasbeehs[key];
        return updatedTasbeehs;
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
        <FaPrayingHands className="text-green-500" /> Tasbeeh
      </h2>

      <TasbeehInput
        newTasbeeh={newTasbeeh}
        setNewTasbeeh={setNewTasbeeh}
        addTasbeeh={addTasbeeh}
      />
      <TasbeehList
        tasbeehs={tasbeehs}
        increment={increment}
        resetCount={resetCount}
        deleteTasbeeh={deleteTasbeeh}
        defaultTasbeehs={defaultTasbeehs}
      />

      <button
        onClick={resetAll}
        className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        <FaUndoAlt /> Reset All
      </button>
    </div>
  );
};

export default TasbeehDetails;
