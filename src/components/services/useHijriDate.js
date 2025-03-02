import { useState, useEffect } from "react";

const useHijriDate = () => {
  const [hijriDay, setHijriDay] = useState(1);

  useEffect(() => {
    const hijriData = localStorage.getItem("hijriDate");
    if (hijriData) {
      try {
        const parsedData = JSON.parse(hijriData);
        const hijriDayNumber = parseInt(parsedData.date.hijri.day, 10) || 1;
        setHijriDay(hijriDayNumber);
      } catch (error) {
        console.error("Error parsing Hijri date:", error);
        setHijriDay(1);
      }
    }
  }, []);

  return hijriDay;
};

export default useHijriDate;
