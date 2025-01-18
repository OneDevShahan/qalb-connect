import PropTypes from "prop-types";

function SearchBar({ searchQuery, setSearchQuery, size = "medium" }) {
  // Define size-based Tailwind CSS classes
  const sizeClasses = {
    small: "w-1/3 p-2 text-sm",
    medium: "w-2/3 p-3 text-base",
    large: "w-full p-4 text-lg",
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className={`border border-green-700 hover:border-green-400 rounded-full dark:bg-gray-800 dark:text-white ${sizeClasses[size]}`}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default SearchBar;
