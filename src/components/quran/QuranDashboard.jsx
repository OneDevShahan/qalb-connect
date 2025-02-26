import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBookQuran } from "react-icons/fa6";
import QuranCard from "./QuranCard";
import QuranMetaData from "./QuranMetaData";
import { API_FAILURE_MSG } from "../utility/Contant";

const QuranDashboard = ({ showToast }) => {
  const navigate = useNavigate();

  const quranVersions = [
    {
      id: 1,
      title: "Muhammad Asad's Translation",
      description:
        "A modern English interpretation offering deep insights and clarity.",
      bestFor:
        "Perfect for understanding Quran's wisdom in contemporary English.",
      apiUrl: import.meta.env.VITE_API_ASAD_QURAN,
    },
    {
      id: 2,
      title: "Uthmani Script (Original Text)",
      description:
        "The traditional Arabic calligraphy preserving the Quran's original form.",
      bestFor:
        "Ideal for Arabic readers or learners seeking the Quran's original text.",
      apiUrl: import.meta.env.VITE_API_UTHMANI_QURAN,
    },
    {
      id: 3,
      title: "Sheikh Al-Afasy's Recitation",
      description:
        "A soul-touching Arabic recitation by the world-renowned Qari.",
      bestFor:
        "Experience the Quran's spiritual beauty through melodious recitation.",
      apiUrl: import.meta.env.VITE_API_ALAFASY_QURAN,
    },
  ];

  const handleApiCall = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        navigate("/surah-details", { state: { data: data.data } }); // Navigate to the Surah details page with the data
      } else {
        showToast(API_FAILURE_MSG, "error", 0);
      }
    } catch (error) {
      console.error(API_FAILURE_MSG, error);
      showToast(API_FAILURE_MSG, "error", 0);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <FaBookQuran className="text-lg mr-2 text-green-500" />
          Explore the Quran
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-3/5 sm:w-1/2 md:w-1/5 mt-3 mb-8" />
        </div>
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore the Quran in various interpretations and formats. Whether you
        seek a deep understanding in English, the original Arabic text, or
        soul-soothing recitations, we have got you covered.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quranVersions.map((version) => (
          <QuranCard
            key={version.id}
            title={version.title}
            description={`${version.description} ${version.bestFor}`}
            onClick={() => handleApiCall(version.apiUrl)}
          />
        ))}
      </div>
      <div>
        <QuranMetaData />
      </div>
    </div>
  );
};
QuranDashboard.propTypes = {
  showToast: PropTypes.func.isRequired,
};

export default QuranDashboard;
