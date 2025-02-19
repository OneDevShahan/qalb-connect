import { useState, useEffect } from "react";

const DailyReminder = () => {
  const [reminderTime, setReminderTime] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("reminderTime");
    if (savedTime) setReminderTime(savedTime);
  }, []);

  const handleReminderSet = () => {
    if (!reminderTime) {
      alert("⏳ Please select a time for the reminder!");
      return;
    }

    const [hours, minutes] = reminderTime.split(":").map(Number);
    const now = new Date();
    const reminderDate = new Date();
    reminderDate.setHours(hours, minutes, 0, 0);

    if (reminderDate <= now) {
      reminderDate.setDate(reminderDate.getDate() + 1); // Schedule for next day if time has passed
    }

    const timeout = reminderDate.getTime() - now.getTime();

    // Clear any existing timeout to prevent multiple alerts
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      if (Notification.permission === "granted") {
        new Notification("⏰ Daily Reminder", {
          body: `It's time for your task!`,
        });
      } else {
        alert("🔔 Reminder Alert: It's time for your task!");
      }
    }, timeout);

    setTimeoutId(newTimeoutId);
    localStorage.setItem("reminderTime", reminderTime);
    alert(`✅ Reminder set for ${reminderDate.toLocaleTimeString()}`);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
        ⏰ Set Daily Reminder
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md w-full sm:w-auto text-gray-900 dark:text-white"
        />
        <button
          onClick={handleReminderSet}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all"
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default DailyReminder;
