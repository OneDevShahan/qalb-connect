import { collection, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../base/SearchBar";
import { db } from "../../services/firebaseConfig";
import CityVisitorsChart from "./CityVisitorsChart"; // Importing the chart
import HeaderSection from "./HeaderSection";
import CityCard from "./CityCard";

const CityDashbaord = () => {
  const [cityCounts, setCityCounts] = useState({});
  const [search, setSearch] = useState("");

  // Fetch city visitors data from Firestore
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

  // Memoized sorted cities based on search input
  const sortedCities = useMemo(
    () =>
      Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1]) // Sort by visitor count (descending)
        .filter(([city]) => city.toLowerCase().includes(search.toLowerCase())),
    [cityCounts, search]
  );

  // Calculate total visitors
  const totalVisitors = Object.values(cityCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <HeaderSection />

      {/* Search Bar */}
      <div className="w-full max-w-3xl">
        <SearchBar
          searchQuery={search}
          setSearchQuery={setSearch}
          size="large"
        />
      </div>

      {/* City List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-6xl px-4 mt-4">
        {sortedCities.length > 0 ? (
          sortedCities.map(([city, count], index) => (
            <CityCard
              key={city}
              city={city}
              count={count}
              index={index}
              totalVisitors={totalVisitors}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-500 dark:text-gray-400 text-center">
            No cities recorded yet.
          </p>
        )}
      </div>

      {/* City Visitors Chart (Bar Chart) */}
      {sortedCities.length > 0 && (
        <div className="w-full max-w-4xl mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4">
            Visitor Distribution by City
          </h2>
          <CityVisitorsChart cityCounts={cityCounts} />
        </div>
      )}

      {/* Back to Dashboard Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6"
      >
        <Link to="/">
          <button className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition transform hover:scale-105">
            Back to Dashboard
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CityDashbaord;
