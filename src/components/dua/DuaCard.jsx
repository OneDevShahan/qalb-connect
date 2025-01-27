import { useMemo } from "react";
import PropTypes from "prop-types";
import { FaBell, FaHeart } from "react-icons/fa";

// Reusable ActionButton Component
const ActionButton = ({ icon, label, gradient, ariaLabel }) => (
  <button
    aria-label={ariaLabel}
    className={`flex items-center gap-2 ${gradient} text-white px-5 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-md`}
  >
    {icon}
    {label}
  </button>
);

// Reusable TranslationList Component
const TranslationList = ({ translations }) => (
  <div className="mt-6 space-y-3">
    {translations.map((translation, index) => (
      <p
        key={index}
        className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        <span className="font-bold">{translation.language}:</span>{" "}
        {translation.text}
      </p>
    ))}
  </div>
);

// Main DuaCard Component
const DuaCard = ({ id, name, arabic, translations, benefits, reference }) => {
  // Memoize translations array
  const translationsArray = useMemo(() => {
    return Array.isArray(translations)
      ? translations
      : Object.entries(translations).map(([language, text]) => ({
          language,
          text,
        }));
  }, [translations]);

  return (
    <div className="flex flex-col mx-auto h-full md:h-auto max-w-sm md:max-w-md lg:max-w-lg  rounded-xl overflow-hidden transition-transform transform bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="p-6 flex-1">
        {/* Title Section */}
        <h2 className="text-lg md:text-xl font-bold text-center text-gray-800 dark:text-white">
          {id}. {Object.values(name).join(" | ")}
        </h2>

        {/* Arabic Text */}
        <p
          dir="rtl"
          className="text-2xl md:text-2xl font-extrabold text-right mt-6 text-gray-900 dark:text-white"
        >
          {arabic}
        </p>

        {/* Translations */}
        <TranslationList translations={translationsArray} />

        {/* Benefits */}
        <p className="mt-8 text-gray-800 dark:text-gray-200 italic text-sm">
          {benefits}
        </p>

        {/* Reference */}
        <p className="mt-5 mb-0 text-gray-700 dark:text-gray-400 text-sm">
          Reference: {reference ?? "Not available"}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
        <ActionButton
          icon={<FaHeart />}
          label="Favorite"
          gradient="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
          ariaLabel="Add to Favorites"
        />
        <ActionButton
          icon={<FaBell />}
          label="Set Reminder"
          gradient="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
          ariaLabel="Set Reminder"
        />
      </div>
    </div>
  );
};

// Prop Types for validation
DuaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    urdu: PropTypes.string.isRequired,
    hindi: PropTypes.string.isRequired,
    english: PropTypes.string.isRequired,
  }).isRequired,
  arabic: PropTypes.string.isRequired,
  translations: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        language: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    PropTypes.object,
  ]).isRequired,
  reference: PropTypes.string,
};

ActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

TranslationList.propTypes = {
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DuaCard;
