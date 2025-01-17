import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ data }) {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Dashboard Title and Write-up */}
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 dark:text-white">
          Welcome to QalbConnect
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Here you can explore your daily duas, favorite prayers, and reminders.
          Choose any category below to dive deeper into your spiritual journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 3).map((dua) => {
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

export default Dashboard;
