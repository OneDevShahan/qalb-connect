export const HEADER = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*", // This only works if the server allows it.
};

export const calculateRemainingTime = (targetTime) => {
  const now = new Date();
  const target = new Date(targetTime);
  return Math.max(0, target - now);
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};
