import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import SearchBar from "../base/SearchBar";
import AyahDetails from "./in-depth/AyahDetails";

const AyahCard = ({ showToast }) => {
  const location = useLocation();
  const { surah } = location.state || {}; // Get passed Surah data from SurahCard

  const [searchQuery, setSearchQuery] = useState("");

  if (!surah) {
    return <p>Surah data not found.</p>;
  }

  const handleCopyAyah = (ayah) => {
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    // Use a timeout to ensure no state updates occur during another render
    setTimeout(
      () => showToast("Ayah details copied to clipboard!", "success"),
      0
    );
  };

  const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <GiBookAura className="mr-2 text-green-500" />
          Surah - <strong>{surah.name}</strong>
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-2/4 md:w-1/5 mt-3 mb-8" />
        </div>
      </h2>

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        size="medium"
      />

      {/* Detailed Surah Info */}

      <AyahDetails
        ayahs={surah}
        handleCopyAyah={handleCopyAyah}
        handleReadAyahLoud={handleReadAyahLoud}
        searchQuery={searchQuery}
      />
    </div>
  );
};
AyahCard.propTypes = {
  showToast: PropTypes.func.isRequired,
};

export default AyahCard;
