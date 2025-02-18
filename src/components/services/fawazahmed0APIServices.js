import axios from "axios";
import { API_FAILURE_MSG } from "../utility/Contant";
const API_BASE_URL = import.meta.env.VITE_API_FAWAZAHMAD_API_BASE_URL;

export const fetchRandomHadith = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hadiths/random`);
    return response.data?.hadith?.text || "Could not fetch Hadith"; // Ensure the text is returned
  } catch (error) {
    console.error(API_FAILURE_MSG, error.message);
    return null; // Prevent app crash on API failure
  }
};
