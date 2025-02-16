import { useEffect, useState } from "react";
import { calculateRemainingTime } from "../utility/Utils";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateRemainingTime("2025-03-10T00:00:00")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemainingTime("2025-03-10T00:00:00"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Ramadhan Countdown</h2>
      <p>{new Date(timeLeft).toISOString().substr(11, 8)}</p>
    </div>
  );
};

export default CountdownTimer;
