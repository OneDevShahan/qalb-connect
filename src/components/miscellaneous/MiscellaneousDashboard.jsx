import { FaTools, FaInfoCircle, FaClipboardList } from "react-icons/fa";
import DashboardCard from "../base/DashboardCard";
import { FaFolderOpen, FaKaaba } from "react-icons/fa6";

function MiscellaneousDashboard() {
  const miscTools = [
    {
      title: "Utilities",
      desc: "Explore various tools and utilities designed to make tasks easier.",
      link: "/misc/utilities",
      icon: <FaTools />,
      fact: "Utility tools improve productivity by 30% in daily tasks.",
      tagline: "Boost your efficiency",
    },
    {
      title: "Knowledge Hub",
      desc: "Access a library of articles, FAQs, and important references.",
      link: "/misc/knowledge-hub",
      icon: <FaInfoCircle />,
      fact: "Knowledge sharing enhances team collaboration by 50%.",
      tagline: "Learn & Grow",
    },
    {
      title: "Task Manager",
      desc: "Manage your daily tasks and keep track of progress efficiently.",
      link: "/misc/task-manager",
      icon: <FaClipboardList />,
      fact: "Organized task management increases productivity by 40%.",
      tagline: "Stay on top of your goals",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Title Section */}
      <div className="text-center">
        <div className="flex justify-center items-center font-bold text-2xl md:text-3xl space-x-2">
          <FaFolderOpen
            size={30}
            className="text-gray-600 dark:text-gray-300"
          />
          <span className="text-gray-800 dark:text-white">
            Miscellanneous Dashboard
          </span>
        </div>
        <div className="flex justify-center">
          <hr className="w-full sm:w-40 md:w-2/5 mt-3 mb-6 border-gray-400 dark:border-gray-600" />
        </div>
      </div>
      <p className="text-md text-center text-gray-700 dark:text-gray-300 mx-auto mb-10 px-4 sm:px-6">
        Welcome to the Miscellaneous Dashboard. Here you can find a collection
        of tools and utilities, knowledge hub, and task manager. Use the
        navigation menu to explore the content and enhance your productivity.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {miscTools.map((tool, index) => (
          <DashboardCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default MiscellaneousDashboard;
