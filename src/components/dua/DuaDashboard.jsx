import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function DuaDashboard({duaData}) {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* DuaDashboard Title and Write-up */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-extrabold mt-3 text-gray-800 dark:text-white">
          🙏 Welcome to Dua Dashboard
        </h2>
        <div className="flex justify-center text-center">
          <hr className="text-center w-2/3 md:w-1/3 mt-3 mb-10" />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here you can explore your daily duas, favorite prayers, and reminders.
          Choose any category below to dive deeper into your spiritual journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {duaData.slice(0, 3).map((dua) => {
          // Determine the gradient based on the category
          let buttonClassName =
            "text-center py-3 px-6 text-white font-medium rounded-lg shadow-md";
          let linkTo = "/daily";

          if (dua.category === "Daily") {
            buttonClassName +=
              " bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600";
          } else if (dua.category === "Favorite") {
            buttonClassName +=
              " bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600";
            linkTo = "/favorite";
          } else if (dua.category === "Reminder") {
            buttonClassName +=
              " bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600";
            linkTo = "/reminder";
          } else {
            buttonClassName +=
              " bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600";
            linkTo = "/all-dua";
          }

          return (
            <div
              key={dua.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Title Section */}
              <div className="mb-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  {dua.name.urdu} | {dua.name.hindi} | {dua.name.english}
                </h3>
              </div>
              {/* Arabic Text */}
              <p className="mb-4 text-3xl md:text-4xl font-extrabold text-right text-gray-900 dark:text-white">
                {dua.arabic}
              </p>
              {/* Benefits */}
              <p className="mb-6 text-gray-600 dark:text-gray-400 text-sm">
                {dua.benefits}
              </p>
              {/* View Button */}
              <div className="flex justify-center items-center mt-auto">
                <Link to="/all-dua" className={`${buttonClassName} mr-3`}>
                  <span>All Dua</span>
                </Link>
                <Link to={linkTo} className={buttonClassName}>
                  {dua.category === "Daily"
                    ? "View Daily Duas"
                    : dua.category === "Favorite"
                    ? "View Favorites"
                    : dua.category === "Reminder"
                    ? "View Reminders"
                    : "Dashboard"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
DuaDashboard.propTypes = {
  duaData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.shape({
        urdu: PropTypes.string.isRequired,
        hindi: PropTypes.string.isRequired,
        english: PropTypes.string.isRequired,
      }).isRequired,
      arabic: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DuaDashboard;
