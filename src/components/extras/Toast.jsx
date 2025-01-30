import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!message) return;
    setProgress(100); // Reset progress for new toast
    const intervalTime = 50; // Controls smoothness
    const step = 100 / (duration / intervalTime); // Dynamically calculate step

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev - step;
        if (nextProgress <= 0) {
          clearInterval(timer);
          setTimeout(onClose, 100); // Delay close for fade-out effect
          return 0;
        }
        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [message, onClose, duration]); // Dependency array ensures effect re-runs

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 max-w-xs px-4 py-3 rounded-lg shadow-md text-white transition-opacity duration-300 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          className="ml-4 text-white focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div
        className="h-1 mt-2 rounded-full bg-opacity-20"
        style={{ backgroundColor: type === "success" ? "green" : "red" }}
      >
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            backgroundColor: type === "success" ? "#34D399" : "#F87171",
          }}
        ></div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Toast;