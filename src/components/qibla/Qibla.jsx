import { useEffect, useState } from "react";
import { getQiblaDirection } from "../services/IslamicDevelopersAPIServices";

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
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
          Welcome to QalbConnect
        </h1>
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
