import { useEffect, useState } from "react";
import { fetchDailyAyah } from "../../services/AlQuranCloudAPIServices";
import { FaBookOpen } from "react-icons/fa";
import { LuClipboardCopy } from "react-icons/lu";
import { AiFillAudio, AiOutlineStop } from "react-icons/ai";
import Toast from "../../extras/Toast";
import { FaCircleStop } from "react-icons/fa6";

const DailyAyah = () => {
  const [ayah, setAyah] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleCopyAyahDetails = () => {
    if (!ayah) return;
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    setToastMessage("Ayah details copied to clipboard!");
  };

  const handleReadAyahLoud = (ayahText) => {
    if (isSpeaking) return;
    const utterance = new SpeechSynthesisUtterance(ayahText);
    utterance.lang = "ar-SA"; // Ensure Arabic pronunciation

    const voices = speechSynthesis.getVoices();
    const arabicVoice = voices.find((voice) => voice.lang.startsWith("ar"));
    if (arabicVoice) utterance.voice = arabicVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const handleStopSpeech = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    fetchDailyAyah().then(setAyah);
  }, []);

  if (!ayah)
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex items-center justify-center min-h-[150px]">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading Ayah...
        </p>
      </div>
    );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-gray-200">
        <FaBookOpen className="text-blue-500" /> Daily Ayah
      </h2>

      <div className="mt-4 px-3 flex items-center justify-evenly w-full">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {ayah.surah.name} ({ayah.surah.englishName})
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {ayah.surah.englishNameTranslation} - {ayah.surah.revelationType}
        </div>
      </div>

      <div className="mt-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md w-full">
        <p className="text-lg text-right font-arabic text-gray-900 dark:text-gray-100">
          {ayah.text}
        </p>
      </div>

      <div className="px-4 mt-3 flex sm:flex-row items-center gap-3 sm:gap-5 text-sm text-gray-600 dark:text-gray-400 w-full justify-between">
        <div className="flex gap-4">
          <LuClipboardCopy
            size={20}
            className="cursor-pointer hover:text-yellow-300"
            title="Copy Ayah"
            onClick={handleCopyAyahDetails}
          />
          <AiFillAudio
            size={20}
            className={`cursor-pointer hover:text-green-500 ${
              isSpeaking ? "text-green-500" : ""
            }`}
            title="Read Ayah Loud"
            onClick={() => handleReadAyahLoud(ayah.text)}
          />
          <FaCircleStop
            size={20}
            className="cursor-pointer hover:text-red-500"
            title="Stop Reading"
            onClick={handleStopSpeech}
          />
        </div>
        <div className="text-center sm:text-right">
          Surah {ayah.surah.number}, Ayah {ayah.numberInSurah} | Juz {ayah.juz}{" "}
          | Page {ayah.page}
        </div>
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default DailyAyah;
