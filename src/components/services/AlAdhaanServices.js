import axios from "axios";
import { API_FAILURE_MSG } from "../utility/Contant";

const AL_ADHAAN_API_BASE_URL = import.meta.env.VITE_API_AL_ADHAAN_BASE_URL;

export const fetchPrayerTimes = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${AL_ADHAAN_API_BASE_URL}/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    return response.data.data.timings; // Ensure only 'timings' is returned
  } catch (error) {
    console.error(API_FAILURE_MSG, error.message);
    return null; // Prevent app crash on API failure
  }
};

export const fetchHijriDate = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${AL_ADHAAN_API_BASE_URL}/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    return response.data.data.date.hijri;
  } catch (error) {
    console.error("Failed to fetch Hijri date:", error.message);
    return null;
  }
};