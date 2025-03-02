import { useState, useEffect, useMemo, useCallback } from "react";

const useCityVisitors = () => {
  const [cityCounts, setCityCounts] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const cityMap = {};

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.location) {
          cityMap[userData.location] = (cityMap[userData.location] || 0) + 1;
        }
      });

      setCityCounts(cityMap);
    });

    return () => unsubscribe();
  }, []);

  const debouncedSetSearch = useCallback((value) => {
    setTimeout(() => setSearch(value), 300);
  }, []);

  const sortedCities = useMemo(
    () =>
      Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1])
        .filter(([city]) => city.toLowerCase().includes(search.toLowerCase())),
    [cityCounts, search]
  );

  return { sortedCities, search, setSearch: debouncedSetSearch };
};

export default useCityVisitors;
