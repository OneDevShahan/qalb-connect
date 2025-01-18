import { useLocation } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import { LuClipboardCopy } from "react-icons/lu";
import { AiFillAudio } from "react-icons/ai";

const AyahCard = () => {
  const location = useLocation();
  const { surah } = location.state || {}; // Get passed Surah data from SurahCard

  if (!surah) {
    return <p>Surah data not found.</p>;
  }

    const handleCopyAyah = (ayah) => {
        const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
        navigator.clipboard.writeText(ayahDetails);
        alert("Ayah details copied to clipboard!");
    }

    const handleReadAyahLoud = (ayahText) => {
        const utterance = new SpeechSynthesisUtterance(ayahText);
        speechSynthesis.speak(utterance);
    }
    
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <GiBookAura className="mr-2 text-green-500" />
          Surah - <strong>{surah.name}</strong>
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-2/4 md:w-1/4 mt-3 mb-8" />
        </div>
      </h2>

      {/* Detailed Surah Info */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6">
        <p className="text-xl font-bold text-center text-gray-800 dark:text-white">
          <strong className="text-green-500">{surah.name}</strong>
        </p>
        <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
          Arabic:
          <strong className="mx-2 font-semibold"> {surah.name}</strong>
        </div>
        <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
          English:
          <p className="mx-2 font-semibold"> {surah.englishName}</p>
        </div>
        <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
          Translated:
          <p className="mx-2 font-semibold"> {surah.englishNameTranslation}</p>
        </div>
        <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
          Revelation Type:
          <p className="mx-2 font-semibold"> {surah.revelationType}</p>
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          This Surah is an important part of the Quran, revealed during the{" "}
          {surah.revelationType} period, providing key lessons on [general
          message or teaching of the Surah].
        </div>

        {/* Ayahs - Loop through all Ayahs in the Surah */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Ayahs
          </h3>
          {surah.ayahs && surah.ayahs.length > 0 ? (
            surah.ayahs.map((ayah) => (
              <div key={ayah.number} className="my-6">
                <div className="text-lg text-gray-800 dark:text-white">
                  <p className="text-lg font-semibold">Ayah {ayah.number}:</p>
                  <p className="italic text-green-500">{ayah.text} </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}
                </p>
                <div className="flex items-center space-x-2 my-2 dark:text-white">
                  <LuClipboardCopy
                    size={20}
                    className="cursor-pointer hover:text-yellow-300"
                    title="Copy Ayah"
                    onClick={() => handleCopyAyah(ayah)}
                  />
                  <AiFillAudio
                    size={20}
                    className="cursor-pointer hover:text-green-500"
                    title="Read Ayah Loud"
                    onClick={() => handleReadAyahLoud(ayah.text)}
                  />
                </div>
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
