import { useState, useEffect } from "react";

const Hadith = () => {
  const [hadith, setHadith] = useState(
    "Hadith not available, this is a placeholder Hadith for now."
  );

  // Fetch daily Hadith from API or use placeholder
  useEffect(() => {
    const API_URL = "https://api.example.com/daily-hadith"; // Replace with actual API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setHadith(data.hadith || "No Hadith available today.");
      })
      .catch((error) => {
        console.error("Error fetching Hadith:", error);
      });
  }, []);

  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lg mb-2">
        📜 Motivational Hadith of the Day
      </h3>
      <p className="text-sm">{hadith}</p>
    </div>
  );
};

export default Hadith;
