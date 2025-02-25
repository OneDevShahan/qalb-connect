import { HiOutlineCalculator } from "react-icons/hi";
import { ZAKAT_EXPLANATIONS } from "../utility/Contant";

function ZakatExplanation() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <HiOutlineCalculator className="mr-2 text-red-400" />
          Explanation of Calculation
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-full sm:w-1/3 md:w-2/5 mt-3 mb-8" />
        </div>
         </h2> 
      {ZAKAT_EXPLANATIONS.map((item, index) => (
        <div key={index} className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {item.title}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            {item.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ZakatExplanation;
