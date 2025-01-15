import { useLocation } from "react-router-dom";

const AyahCard = () => {
  const location = useLocation();
  const { surah } = location.state || {}; // Get passed Surah data from SurahCard

  if (!surah) {
    return <p>Surah data not found.</p>;
  }

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Ayah Details for {surah.englishName} ({surah.englishNameTranslation})
      </h1>

      {/* Detailed Surah Info */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          {surah.englishName} ({surah.englishNameTranslation})
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Revelation Type: {surah.revelationType}
        </p>
        <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
          This Surah is an important part of the Quran, revealed during the{" "}
          {surah.revelationType} period, providing key lessons on [general
          message or teaching of the Surah].
        </p>

        {/* Ayahs - Loop through all Ayahs in the Surah */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Ayahs:
          </h3>
          {surah.ayahs && surah.ayahs.length > 0 ? (
            surah.ayahs.map((ayah) => (
              <div key={ayah.number} className="mt-4">
                <p className="text-lg text-gray-800 dark:text-white">
                  <strong>Ayah {ayah.number}:</strong> {ayah.text}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}
                </p>
              </div>
            ))
          ) : (
            <p>No Ayahs available for this Surah.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AyahCard;
