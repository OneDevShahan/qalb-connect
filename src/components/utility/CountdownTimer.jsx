import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ targetTime, label = "" }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    let target;

    if (targetTime.includes(":")) {
      // Case for Suhoor/Iftar countdown (HH:MM)
      const [hours, minutes] = targetTime.split(":").map(Number);
      target = new Date();
      target.setHours(hours, minutes, 0, 0);
      if (target < now) target.setDate(target.getDate() + 1);
    } else {
      // Case for Ramadhan countdown (Full Date)
      target = new Date(targetTime);
    }

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
    <div className="p-4 dark:text-white">
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-xl font-bold">
        {timeLeft.days > 0 && `${String(timeLeft.days).padStart(2, "0")}d `}
        {String(timeLeft.hours).padStart(2, "0")}h{" "}
        {String(timeLeft.minutes).padStart(2, "0")}m{" "}
        {String(timeLeft.seconds).padStart(2, "0")}s
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
    targetTime: PropTypes.string.isRequired,
    label: PropTypes.string,
};

export default CountdownTimer;
