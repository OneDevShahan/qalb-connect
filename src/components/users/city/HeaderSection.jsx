import { FaCity } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <FaCity size={30} className="text-gray-600 dark:text-gray-300 mr-2" />
          Visitors&apos; Cities
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-1/2 md:w-1/5 mt-3 mb-8" />
        </div>
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore the cities where our visitors are connecting from. Find out the
        most popular locations and see where our global audience is tuning in
        from.
      </p>
    </motion.div>
  );
};

export default HeaderSection;
