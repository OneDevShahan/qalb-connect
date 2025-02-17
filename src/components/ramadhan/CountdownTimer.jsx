import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ targetTime, label }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetTime);
    let difference = target - now;

    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow text-center">
      <h2 className="text-lg font-semibold">{label} Countdown</h2>
      <p className="text-xl font-bold">
        {String(timeLeft.days).padStart(2, "0")}d{" "}
        {String(timeLeft.hours).padStart(2, "0")}h{" "}
        {String(timeLeft.minutes).padStart(2, "0")}m{" "}
        {String(timeLeft.seconds).padStart(2, "0")}s
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  targetTime: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CountdownTimer;
