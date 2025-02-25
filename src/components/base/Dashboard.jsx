import DashboardCard from "./DashboardCard";
import PropTypes from 'prop-types';
function Dashboard({ dashboardData }) {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Dashboard Title and Write-up */}
      <div className="text-center">
        <div className="flex justify-center items-center font-bold text-2xl md:text-3xl space-x-2 mt-5">
          <div className="flex items-center">
            {/* Light Mode SVG */}
            <img
              src="QalbConnect_Light.svg"
              alt="QalbConnect Logo"
              className="h-10 w-10 block dark:hidden"
            />
            {/* Dark Mode SVG */}
            <img
              src="QalbConnect_Dark.svg"
              alt="QalbConnect Logo"
              className="h-10 w-10 hidden dark:block"
            />
          </div>
          <span className="text-gray-800 dark:text-white">
            Welcome to QalbConnect
          </span>
        </div>

        <div className="flex justify-center">
          <hr className="w-full sm:w-2/5 md:w-1/3 mt-3 mb-6 border-gray-400 dark:border-gray-600" />
        </div>
      </div>

      <p className="text-md text-center text-gray-700 dark:text-gray-300 mb-8 pb-4 md:pb-8">
        Welcome to the Islamic Dashboard. Here you can find a collection of
        Islamic resources, including daily duas, supplications, and more. Use
        the navigation menu to explore the content and enhance your spiritual
        journey. May you find peace and tranquility in your daily practice.
      </p>

      {/* Cards Grid (Better Spacing & Alignment) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 sm:px-8 md:px-10 mt-8">
        {dashboardData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            desc={data.desc}
            link={data.link}
            icon={data.icon}
            fact={data.fact}
            tagline={data.tagline}
          />
        ))}
      </div>
    </div>
  );
}
Dashboard.propTypes = {
  dashboardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      fact: PropTypes.string,
      tagline: PropTypes.string,
    })
  ).isRequired,
};

export default Dashboard;
