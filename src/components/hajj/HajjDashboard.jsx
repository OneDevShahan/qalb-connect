import { FaKaaba } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";

function HajjDashboard() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Title Section */}
      <div className="text-center">
        <div className="flex justify-center items-center font-bold text-2xl md:text-3xl space-x-2">
          <FaKaaba size={30} className="text-gray-600 dark:text-gray-300" />
          <span className="text-gray-800 dark:text-white">Hajj Guide</span>
        </div>

        <div className="flex justify-center">
          <hr className="w-32 sm:w-40 md:w-48 mt-3 mb-6 border-gray-400 dark:border-gray-600" />
        </div>
      </div>

      {/* Introduction */}
      <p className="text-md text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-6">
        Hajj is an annual Islamic pilgrimage to Makkah and a sacred journey for
        millions of Muslims worldwide. It is one of the five pillars of Islam
        and is obligatory for every financially and physically able Muslim at
        least once in their lifetime.
      </p>

      {/* Hajj Resources */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 sm:px-8 md:px-10 mt-8">
        {/* Step-by-Step Guide */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <GiPathDistance size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold dark:text-white">Hajj Steps</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            A step-by-step guide to performing Hajj, from Ihram to Tawaf
            al-Wada.
          </p>
        </div>

        {/* Important Dates */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <MdDateRange size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold dark:text-white">
            Hajj 2025 Dates
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Find out the important dates for Hajj 2025 and plan accordingly.
          </p>
        </div>

        {/* More Coming Soon */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <FaKaaba size={40} className="text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold dark:text-white">
            More Resources
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Coming soon... Stay tuned for more Hajj-related resources!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HajjDashboard;
