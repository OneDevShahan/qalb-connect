import PropTypes from "prop-types";

const ProgressBar = ({ completion }) => {
  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
        Overall Completion: {completion}%
      </h3>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-2">
        <div
          className="h-4 rounded-full bg-green-500 transition-all"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completion: PropTypes.number.isRequired,
};

export default ProgressBar;
