import { AiFillAudio } from "react-icons/ai";
import { LuClipboardCopy } from "react-icons/lu";
import PropTypes from 'prop-types';

const AyahDetails = ({
  ayahs,
  handleReadAyahLoud,
  searchQuery,
  showToast,
}) => {
  // Filter Ayahs based on the search query
  const filteredAyahs = ayahs.ayahs?.filter((ayah) =>
    ayah.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyAyahDetails = (ayah) => {
      console.log("Copying Ayah details to clipboard: ", ayah);
      const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
      navigator.clipboard.writeText(ayahDetails);
      showToast("Ayah details copied to clipboard!", "success", 0);
    };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl rounded-xl p-6 mb-6">
      <p className="text-xl font-bold text-center text-gray-800 dark:text-white">
        <strong className="text-green-500">{ayahs.name}</strong>
      </p>
      <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
        Arabic:
        <strong className="mx-2 font-semibold"> {ayahs.name}</strong>
      </div>
      <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
        English:
        <p className="mx-2 font-semibold"> {ayahs.englishName}</p>
      </div>
      <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
        Translated:
        <p className="mx-2 font-semibold"> {ayahs.englishNameTranslation}</p>
      </div>
      <div className="flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300">
        Revelation Type:
        <p className="mx-2 font-semibold"> {ayahs.revelationType}</p>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        This Surah is an important part of the Quran, revealed during the{" "}
        {ayahs.revelationType} period, providing key lessons on [general message
        or teaching of the Surah].
      </div>

      {/* Ayahs - Filtered based on search query */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Ayahs
        </h3>
        {filteredAyahs && filteredAyahs.length > 0 ? (
          filteredAyahs.map((ayah) => (
            <div key={ayah.number} className="my-6">
              <div className="text-lg text-gray-800 dark:text-white">
                <p className="text-lg font-semibold">Ayah {ayah.number}:</p>
                <p className="italic text-green-500">{ayah.text}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}
              </p>
              <div className="flex items-center space-x-2 my-2 dark:text-white">
                <LuClipboardCopy
                  size={20}
                  className="cursor-pointer hover:text-yellow-300"
                  title="Copy Ayah"
                  onClick={() => handleCopyAyahDetails(ayah)}
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
          <p className="text-center font-bold text-2xl text-red-500">
            No Ayah detail match your search criteria.
          </p>
        )}
      </div>
    </div>
  );
};
AyahDetails.propTypes = {
  ayahs: PropTypes.shape({
    name: PropTypes.string,
    englishName: PropTypes.string,
    englishNameTranslation: PropTypes.string,
    revelationType: PropTypes.string,
    ayahs: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.number,
        text: PropTypes.string,
        juz: PropTypes.number,
        manzil: PropTypes.number,
        page: PropTypes.number,
      })
    ),
  }).isRequired,
  handleCopyAyah: PropTypes.func.isRequired,
  handleReadAyahLoud: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  showToast: PropTypes.func.isRequired,
};

export default AyahDetails;
