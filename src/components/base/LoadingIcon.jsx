import PropTypes from "prop-types";
import SpinnerSVG from "./SpinnerSVG";

const LoadingIcon = ({ size = "md", color }) => {
  return (
    <div className="flex items-center justify-center">
      <SpinnerSVG sizeClass={sizeClasses[size]} color={color} />
    </div>
  );
};

LoadingIcon.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  color: PropTypes.string,
};

export default LoadingIcon;

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};