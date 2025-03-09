import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";

const EidMubarakConfetti = ({ numberOfPieces = 500 }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Resize handler to update confetti dimensions
    const handleResize = () => {
      requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    window.addEventListener("resize", handleResize);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return showConfetti ? (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={numberOfPieces}
      gravity={0.1}
      wind={0.02}
      opacity={0.9}
      recycle={false} // Stop after 5 seconds
      colors={["#FFD700", "#FF69B4", "#00FFFF", "#FFFFFF", "#FF4500"]}
    />
  ) : null;
};

EidMubarakConfetti.propTypes = {
  numberOfPieces: PropTypes.number,
};

export default EidMubarakConfetti;
