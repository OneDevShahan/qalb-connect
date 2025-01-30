import { FaPersonPraying } from "react-icons/fa6";
import { DailyDua } from "../utility/Contant";
import DuaCard from "./DuaCard";
import SearchBar from "../base/SearchBar";
import { useState } from "react";

function AllDua() {

    const [searchQuery, setSearchQuery] = useState("");
    // Filtered Duas based on multiple search criteria
    const filteredDuas = DailyDua.filter(
      (dua) =>
        dua.name.urdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.name.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.name.hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.arabic.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex-1 p-4 my-10 mx-5">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <FaPersonPraying size={25} className="mx-2 text-lg text-gray-400" />
          All Duas ({filteredDuas.length})
        </div>
        <div className="flex justify-center text-center">
          {/* <hr className="text-center w-2/5 md:w-1/6 mt-3 mb-10" /> */}
          <hr className="text-center w-1/2 sm:w-1/3 md:w-1/6 mt-3 mb-8" />
        </div>
      </h2>

      {/* Write-up */}
      <p className="text-md text-center text-gray-700 dark:text-gray-300 mb-8">
        Duas enrich our daily lives, offering spiritual guidance and peace.
        Daily duas foster mindfulness, favorite duas hold personal significance,
        reminders ensure we stay steadfast in faith, and occasional duas bring
        blessings for special moments. Together, they strengthen our connection
        with the Divine, infusing every day with tranquility and purpose.
      </p>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredDuas.length > 0 ? (
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 lg:space-x-4 lg:space-y-4 gap-4 dark:text-white">
          {filteredDuas.map((dua) => (
            <DuaCard key={dua.id} {...dua} />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-2xl text-red-500">
          No Duas available for your search.
        </p>
      )}
    </div>
  );
}
export default AllDua;
