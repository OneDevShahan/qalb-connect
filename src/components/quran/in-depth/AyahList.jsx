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
