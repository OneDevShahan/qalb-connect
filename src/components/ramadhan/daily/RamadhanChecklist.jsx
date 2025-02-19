import { useState, useEffect } from "react";
import Checklist from "./Checklist";

// Checklist items with icons
const checklistItems = [
  { text: "Suhoor (Pre-dawn Meal)", icon: "🌅" },
  { text: "Fajr Prayer", icon: "🙏" },
  { text: "Quran Reading", icon: "📖" },
  { text: "Dhuhr Prayer", icon: "🙏" },
  { text: "Asr Prayer", icon: "🙏" },
  { text: "Iftar (Breaking Fast)", icon: "🌙" },
  { text: "Maghrib Prayer", icon: "🙏" },
  { text: "Isha Prayer", icon: "🙏" },
  { text: "Taraweeh Prayer", icon: "🤲" },
  { text: "Giving Charity", icon: "💰" },
  { text: "Making Dua", icon: "🤲" },
];

const RamadhanChecklist = () => {
  const [checklist, setChecklist] = useState({});
  const [completion, setCompletion] = useState(0);

  // Handle checklist state and progress
  useEffect(() => {
    const savedChecklist = localStorage.getItem("ramadhanChecklist");
    if (savedChecklist) {
      const parsedChecklist = JSON.parse(savedChecklist);
      setChecklist(parsedChecklist);
      updateCompletion(parsedChecklist);
    }
  }, []);

  // Update completion percentage when checklist changes
  useEffect(() => {
    localStorage.setItem("ramadhanChecklist", JSON.stringify(checklist));
    updateCompletion(checklist);
  }, [checklist]);

  const updateCompletion = (currentChecklist) => {
    const completed = Object.values(currentChecklist).filter(Boolean).length;
    const percentage = Math.round((completed / checklistItems.length) * 100);
    setCompletion(percentage);
  };

  const toggleItem = (item) => {
    setChecklist((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetChecklist = () => {
    setChecklist({});
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow text-center">
      <Checklist
        checklistItems={checklistItems}
        checklist={checklist}
        toggleItem={toggleItem}
        completion={completion}
        resetChecklist={resetChecklist}
      />
    </div>
  );
};

export default RamadhanChecklist;
