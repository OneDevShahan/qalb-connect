import { useState, useEffect, useRef } from "react";
import { BiBell } from "react-icons/bi";
import Toast from "../../extras/Toast";
import PropTypes from "prop-types";

const DailyReminder = ({ time }) => {
  const [isReminderSet, setIsReminderSet] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }

    const storedReminder = localStorage.getItem("reminderTime");
    if (storedReminder === time) {
      setIsReminderSet(true);
    }
  }, [time]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleToggleReminder = () => {
    if (isReminderSet) {
      clearTimeout(timeoutRef.current);
      localStorage.removeItem("reminderTime");
      setIsReminderSet(false);
      setToast({ message: "🔕 Reminder canceled!", type: "error" });
    } else {
      if (!time) {
        setToast({ message: "⏳ No prayer time found!", type: "error" });
        return;
      }

      const [hours, minutes] = time.split(":").map(Number);
      const now = new Date();
      const reminderDate = new Date();
      reminderDate.setHours(hours, minutes, 0, 0);

      if (reminderDate <= now) {
        reminderDate.setDate(reminderDate.getDate() + 1);
      }

      const timeout = reminderDate.getTime() - now.getTime();

      timeoutRef.current = setTimeout(() => {
        const audio = new Audio(`${import.meta.env.BASE_URL}ashaduallaha.mp3`);
        audio.play().catch((err) => console.log("Audio play error:", err));

        if (Notification.permission === "granted") {
          new Notification("⏰ Prayer Time Reminder", {
            body: `It's time for ${time} prayer!`,
          });
        } else {
          setToast({
            message: `🔔 Prayer Reminder: It's time for ${time} prayer!`,
            type: "success",
          });
        }

        if (navigator.vibrate) {
          navigator.vibrate([300, 100, 300]);
        }

        setIsReminderSet(false);
        localStorage.removeItem("reminderTime");
      }, timeout);

      localStorage.setItem("reminderTime", time);
      setIsReminderSet(true);
      setToast({
        message: `⏰ Reminder set for ${reminderDate.toLocaleTimeString()}`,
        type: "success",
      });
    }
  };

  return (
    <>
      <button
        onClick={handleToggleReminder}
        className="absolute top-1 right-1 p-1 rounded-full transition"
        style={{
          backgroundColor: isReminderSet ? "yellow" : "transparent",
        }}
      >
        <BiBell
          className={`w-5 h-5 ${
            isReminderSet
              ? "text-yellow-600"
              : "text-gray-700 dark:text-gray-300"
          }`}
        />
      </button>

      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: "", type: "success" })}
        />
      )}
    </>
  );
};

DailyReminder.propTypes = {
  time: PropTypes.string.isRequired,
};

export default DailyReminder;
