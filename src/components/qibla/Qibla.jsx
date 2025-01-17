import { useEffect, useState } from "react";
import { getQiblaDirection } from "../services/IslamicDevelopersAPIServices";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";

function Qibla() {
  const [direction, setDirection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getQiblaDirection(latitude.toFixed(6), longitude.toFixed(6))
            .then((response) => response.data)
            .then((data) => setDirection(data.direction))
            .catch((error) => setError(error.message));
        },
        (error) => setError(error.message)
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-center dark:text-white">
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <BiSolidNavigation
              size={25}
              className="mr-2 text-lg hover:text-green-400"
            />{" "}
            Welcome to QalbConnect
          </div>
          <div className="flex justify-center text-center">
            <hr className="text-center w-2/4 md:w-1/3 mt-3 mb-10" />
          </div>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Here you can explore your daily duas, favorite prayers, and reminders.
          Choose any category below to dive deeper into your spiritual journey.
        </p>
      </div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {direction !== null ? (
          <div className="compass">
            <div
              className="needle"
              style={{ transform: `rotate(${direction}deg)` }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Qibla;
