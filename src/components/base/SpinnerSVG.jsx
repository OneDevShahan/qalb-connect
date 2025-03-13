import PropTypes from "prop-types";

const SpinnerSVG = ({ sizeClass, color }) => {
  return (
    <svg
      className={`animate-spin ${sizeClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {/* Background Circle */}
      <circle
        className="opacity-25 stroke-current"
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
        stroke={color || "url(#gradient)"}
      ></circle>

      {/* Foreground Path */}
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8v4l2-2-2-2V4a8 8 0 100 16h4v-2l-2 2 2 2v-4a8 8 0 01-8-8z"
        fill={color || "currentColor"}
      ></path>

      {/* Gradient Definition */}
      {!color && (
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};

SpinnerSVG.propTypes = {
  sizeClass: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SpinnerSVG;
