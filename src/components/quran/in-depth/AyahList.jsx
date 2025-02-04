import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../../base/SearchBar";
import AyahDetails from "./AyahDetails";
const AyahList = ({ surah, showToast }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleReadAyahLoud = (ayahText) => {
    const utterance = new SpeechSynthesisUtterance(ayahText);
    speechSynthesis.speak(utterance);
  };

  const handleCopyAyah = (ayah) => {
    const ayahDetails = `Ayah ${ayah.number}: ${ayah.text}\nJuz: ${ayah.juz}, Manzil: ${ayah.manzil}, Page: ${ayah.page}`;
    navigator.clipboard.writeText(ayahDetails);
    // Use a timeout to ensure no state updates occur during another render
    setTimeout(
      () => showToast("Ayah details copied to clipboard!", "success"),
      0
    );
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        size="medium"
      />

      {/* Detailed Surah Info */}
      <AyahDetails
        ayahs={surah}
        //handleCopyAyah={handleCopyAyah}
        handleReadAyahLoud={handleReadAyahLoud}
        searchQuery={searchQuery}
        showToast={showToast}
      />
    </div>
  );
};
AyahList.propTypes = {
  surah: PropTypes.array.isRequired,
  showToast: PropTypes.func.isRequired,
};

export default AyahList;
