import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!message) return;

    const interval = 100; // Update interval for the progress bar
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev - step;
        if (nextProgress <= 0) {
          clearInterval(timer);
          // Ensure onClose is called only outside of React's render
          setTimeout(onClose, 0);
          return 0;
        }
        return nextProgress;
      });
    }, interval);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 max-w-xs px-4 py-3 rounded-lg shadow-md text-white ${
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
        style={{
          backgroundColor: type === "success" ? "green" : "red",
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            transition: "width 0.1s linear",
            backgroundColor: type === "success" ? "#34D399" : "#F87171",
          }}
        ></div>
      </div>
    </div>
)};
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};
export default Toast;