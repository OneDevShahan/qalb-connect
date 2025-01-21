import axios from "axios";
import { API_FAILURE_MSG } from "../utility/Contant";
const AL_QURAN_API_BASE_URL = import.meta.env.VITE_API_AL_QURAN_API_BASE_URL;

export const fetchQuranData = async (edition) => {
  try {
    const response = await fetch(
      `${AL_QURAN_API_BASE_URL}/v1/quran/${edition}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(API_FAILURE_MSG, error.message);
    throw error;
  }
};

export const fetchQuranMetaData = async () => {
  try {
    const response = await axios.get(`${AL_QURAN_API_BASE_URL}/meta`);
    return response.data.data;
  } catch (error) {
    console.error(API_FAILURE_MSG, error.message, error.message);
    throw new Error(API_FAILURE_MSG);
  }
};
