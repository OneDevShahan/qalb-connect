import { useEffect, useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { LuClipboardCopy } from "react-icons/lu";
import { PiBookBookmark } from "react-icons/pi";
import LoadingIcon from "../base/LoadingIcon";
import { fetchJuzData } from "../services/AlQuranCloudAPIServices";
const JuzComponent = () => {
  const [juz, setJuz] = useState(30); // Default Juz
  const [edition, setEdition] = useState("en.asad"); // Default Edition
  const [juzData, setJuzData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getJuzData = async () => {
      setLoading(true);
      try {
        const data = await fetchJuzData(juz, edition);
        setJuzData(data);
      } catch (err) {
        console.error("Error fetching Juz data: ", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    getJuzData();
  }, [juz, edition]);

    
    const handleCopyAyah = (ayah) => {
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    alert("Ayah details copied to clipboard!");
    };

    const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
    };
    
  return (
    // <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
    <div className="p-6 min-h-screen dark:from-gray-800 dark:to-gray-900">
      <h2 className="m-2 text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <PiBookBookmark size={25} className="mx-2 text-lg text-green-500" />
          Quran Juz Viewer
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-1/2 md:w-1/5 mt-3 mb-10" />
        </div>
      </h2>
      {/* Juz Selector */}
      <div className="flex justify-center items-center mb-6 space-x-6">
        <select
          value={juz}
          onChange={(e) => setJuz(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[...Array(30).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Juz {num + 1}
            </option>
          ))}
        </select>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en.asad">Muhammad Asad (English)</option>
          <option value="quran-uthmani">Uthmani Script (Arabic)</option>
        </select>
      </div>

      {/* Data Display */}
      <div className="overflow-y-auto max-h-[500px] md:mb-10 md:p-2">
        {loading ? (
          <div className="flex flex-col items-center justify-center text-red-500">
            <div className="mb-2 text-green-500">Data is loading...</div>
            <LoadingIcon height="h-20" width="w-20" color="red" />
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : juzData ? (
          <div className="space-y-4">
            {juzData.ayahs.map((ayah) => (
              <div
                key={ayah.number}
                className="p-4 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl"
              >
                <div className="text-lg font-medium dark:text-white">
                  <span className="font-bold">{ayah.numberInSurah}</span>.{"  "}
                  <span className="ml-2 text-green-500">{ayah.text}</span>
                  <div className="flex items-center space-x-2 my-2">
                    <LuClipboardCopy
                      size={20}
                      className="cursor-pointer hover:text-yellow-400"
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
              </div>
            ))}
          </div>
        ) : (
          <p className="font-bold text-center text-red-500">
            Select a Juz to view its content.
          </p>
        )}
      </div>
    </div>
    // </div>
  );
};

export default JuzComponent;
