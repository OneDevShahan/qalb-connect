import { useEffect, useState } from "react";
import { calculateRemainingTime } from "../utility/Utils";

const CountdownTimer = () => {
  const targetDate = "2025-02-28T00:00:00";
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemainingTime(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Ramadhan Countdown</h2>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default CountdownTimer;