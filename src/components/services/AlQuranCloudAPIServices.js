export const fetchQuranData = async (edition) => {
  try {
    const response = await fetch(
      `http://api.alquran.cloud/v1/quran/${edition}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch Quran data:", error.message);
    throw error; // Re-throw error to handle it in the component
  }
};
