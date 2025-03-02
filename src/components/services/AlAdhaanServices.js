import axios from "axios";

const AL_ADHAAN_API_BASE_URL = import.meta.env.VITE_API_AL_ADHAAN_BASE_URL;
const STORAGE_KEY = "dailyData";
const EXPIRY_HOURS = 24; // Set expiry duration

export const fetchDailyData = async (latitude, longitude) => {
  const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storedData && (Date.now() - storedData.timestamp) < EXPIRY_HOURS * 60 * 60 * 1000) {
    return storedData.data; // Return cached data if not expired
  }

  try {
    const { data } = await axios.get(
      `${AL_ADHAAN_API_BASE_URL}/timings?latitude=${latitude}&longitude=${longitude}&method=1`
    );

    const dailyData = { data, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyData)); // Store new data
    return data;
  } catch (error) {
    console.error("Failed to fetch Hijri date:", error.message);
    return null;
  }
};

export const fetchPrayerTimes = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${AL_ADHAAN_API_BASE_URL}/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    return response.data.data.timings; // Ensure only 'timings' is returned
  } catch (error) {
    console.error("Failed to fetch Prayer times:", error.message);
    return null; // Prevent app crash on API failure
  }
};
