import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Checklist from "./Checklist";
import useHijriDate from "../../services/useHijriDate";
import { CHECK_LIST_ITEMS_WITH_ICONS } from "../../utility/Contant";

const RamadhanChecklistBoard = () => {
  const hijriDay = useHijriDate();
  const [checklist, setChecklist] = useState({});
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const savedChecklist = localStorage.getItem(
      `ramadhanChecklistDay${hijriDay}`
    );
    let updatedChecklist = {};

    if (savedChecklist) {
      updatedChecklist = JSON.parse(savedChecklist);

      // Ensure all checklist items are present
      CHECK_LIST_ITEMS_WITH_ICONS.forEach(({ text }) => {
        if (!(text in updatedChecklist)) {
          updatedChecklist[text] = false;
        }
      });

      localStorage.setItem(
        `ramadhanChecklistDay${hijriDay}`,
        JSON.stringify(updatedChecklist)
      );
    } else {
      updatedChecklist = CHECK_LIST_ITEMS_WITH_ICONS.reduce(
        (acc, { text }) => ({ ...acc, [text]: false }),
        {}
      );
      localStorage.setItem(
        `ramadhanChecklistDay${hijriDay}`,
        JSON.stringify(updatedChecklist)
      );
    }

    setChecklist(updatedChecklist);
    updateCompletion(updatedChecklist);
  }, [hijriDay]);

  useEffect(() => {
    if (Object.keys(checklist).length > 0) {
      localStorage.setItem(
        `ramadhanChecklistDay${hijriDay}`,
        JSON.stringify(checklist)
      );
      updateCompletion(checklist);
    }
  }, [checklist, hijriDay]);

  const updateCompletion = (currentChecklist) => {
    const completed = Object.values(currentChecklist).filter(Boolean).length;
    const percentage = Math.round(
      (completed / CHECK_LIST_ITEMS_WITH_ICONS.length) * 100
    );
    setCompletion(percentage);
  };

  const toggleItem = (item) => {
    setChecklist((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetChecklist = () => {
    const newChecklist = CHECK_LIST_ITEMS_WITH_ICONS.reduce(
      (acc, { text }) => ({ ...acc, [text]: false }),
      {}
    );
    setChecklist(newChecklist);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow text-center">
      <Checklist
        checklistItems={CHECK_LIST_ITEMS_WITH_ICONS}
        checklist={checklist}
        toggleItem={toggleItem}
        completion={completion}
        resetChecklist={resetChecklist}
      />
      <div className="mt-4">
        <Link
          to="/checklist-progress"
          className="text-blue-600 dark:text-blue-400"
        >
          🌟 Level Up Your Ramadhan →
        </Link>
      </div>
    </div>
  );
};

export default RamadhanChecklistBoard;
