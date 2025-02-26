import axios from "axios";

const API_LOCATION = import.meta.env.VITE_API_IP_API;
const CACHE_KEY = "cached_location";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export const fetchLocation = async () => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { ip, location, timestamp } = JSON.parse(cachedData);

      // Check if cache is still valid
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log("Using cached location data");
        return { ip, location };
      }
    }

    // Fetch fresh data if cache is expired or missing
    const response = await axios.get(API_LOCATION);
    const { ip, city } = response.data;
    const location = city || "Unknown";

    // Store new data in cache
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ip, location, timestamp: Date.now() })
    );

    return { ip, location };
  } catch (error) {
    console.error("Error fetching location:", error);

    // If API fails, return cached data if available
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { ip, location } = JSON.parse(cachedData);
      return { ip, location };
    }

    return { ip: "Unknown", location: "Unknown" };
  }
};

export default fetchLocation;
