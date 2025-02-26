export const HEADER = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*", // This only works if the server allows it.
};

export const calculateRemainingTime = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 5); // Extract "HH:MM" format
};