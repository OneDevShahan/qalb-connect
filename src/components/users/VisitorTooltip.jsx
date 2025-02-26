import { useState } from "react";

const VisitorTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer underline focus:outline-none"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        What’s this?
      </button>
      {showTooltip && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg 
          px-3 py-2 shadow-md mt-1 w-56 z-10 transition-opacity duration-300"
        >
          This counter tracks unique visitor IPs globally.
        </div>
      )}
    </div>
  );
};

export default VisitorTooltip;
