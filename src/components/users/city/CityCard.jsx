const CityCard = ({ city, count, index, totalVisitors }) => {
  const getBackgroundClass = (index) => {
    const bgClasses = [
      "bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-yellow-700 dark:to-yellow-900 text-black font-bold", // 1st place
      "bg-gradient-to-r from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800", // 2nd place
      "bg-gradient-to-r from-orange-300 to-orange-500 dark:from-orange-600 dark:to-orange-900", // 3rd place
    ];
    return (
      bgClasses[index] ||
      "bg-white/30 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-gray-200"
    );
  };

  const percentage = totalVisitors
    ? ((count / totalVisitors) * 100).toFixed(1)
    : 0;

  return (
    <div
      className={`p-5 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${getBackgroundClass(
        index
      )}`}
    >
      <h2 className="text-xl font-semibold text-center mb-1">{city}</h2>
      <p className="text-center text-lg">
        <span className="font-bold">{count}</span> visitors <br />
        <span className="text-sm opacity-80">({percentage}%)</span>
      </p>
    </div>
  );
};

export default CityCard;
