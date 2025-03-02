import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";

const ConfettiEffect = ({ numberOfPieces = 100 }) => {
  const confettiRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 150 });

  useEffect(() => {
    if (confettiRef.current) {
      const { width, height } = confettiRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div
      ref={confettiRef}
      className="relative w-full h-40 overflow-hidden flex flex-col justify-center items-center"
    >
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={numberOfPieces}
        gravity={0.05}
      />
      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
        🌙 Ramadhan Mubarak! 🎉
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">
        May this holy month bring peace, blessings, and joy to you and your
        family. Remember me in your Duas!
      </p>
    </div>
  );
};

ConfettiEffect.propTypes = {
  numberOfPieces: PropTypes.number,
};

export default ConfettiEffect;
