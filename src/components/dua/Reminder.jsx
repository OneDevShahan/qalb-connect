import DuaCard from "./DuaCard";
import { DailyDua } from "../utility/Contant";
import { FaBell } from "react-icons/fa";

function Reminder() {
  return (
    <div className="flex-1 p-4 my-10 mx-5">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <FaBell size={25} className="mx-2 text-lg text-yellow-300" />
          Reminder Duas
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-3/5 sm:w-1/3 md:w-1/5 mt-3 mb-8" />
        </div>
      </h2>

      {/* Write-up */}
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Reminder Duas are those prayers that you can set as a reminder to recite
        throughout your day. These duas help you stay connected with your
        spiritual practices and are perfect for keeping you aligned with your
        intentions.
      </p>

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
export default Reminder;
