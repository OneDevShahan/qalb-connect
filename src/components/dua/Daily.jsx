import React from "react";
import { DailyDua } from "../utility/Contant";
import DuaCard from "./DuaCard";

function Daily() {
  return (
    <div className="flex-1 p-4 my-10 mx-5">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        Daily Duas
        <div className="flex justify-center text-center">
          <hr className="text-center w-1/4 mt-3 mb-10" />
        </div>
      </h2>
      {DailyDua.length > 0 ? (
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 lg:space-x-4 lg:space-y-4 gap-4 dark:text-white">
          {DailyDua.map((dua) => (
            <DuaCard key={dua.id} {...dua} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No Duas available at the moment.
        </p>
      )}
    </div>
  );
}

export default Daily;
