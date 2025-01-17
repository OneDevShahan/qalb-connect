const Bismillah = ({
  size = "md", // Default size: md
  showArabic = false, // Flag to show Arabic text
  showEnglish = false, // Flag to show English translation
  showHindi = false, // Flag to show Hindi translation
}) => {
  // Dynamic size classes based on the `size` prop
  const sizeClasses = {
    sm: "text-sm p-2",
    md: "text-lg p-4",
    lg: "text-2xl p-6",
    xl: "text-3xl p-8",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center shadow-lg text-center ${sizeClasses[size]}
      bg-gradient-to-r from-green-400 to-green-600 text-white
      dark:from-green-700 dark:to-green-900 dark:text-gray-200`}
    >
      {showArabic && (
        <p
          className="font-extrabold text-2xl mb-2"
          aria-label="Arabic Text for Bismillah"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>
      )}
      {showEnglish && (
        <p
          className="font-semibold text-xl mb-2"
          aria-label="English Translation of Bismillah"
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
      )}
      {showHindi && (
        <p
          className="font-semibold text-xl"
          aria-label="Hindi Translation of Bismillah"
        >
          अल्लाह के नाम से, जो सबसे कृपावान और दयालु है
        </p>
      )}
    </div>
  );
};

export default Bismillah;
