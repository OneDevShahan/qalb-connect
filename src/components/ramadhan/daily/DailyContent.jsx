import DailyAyah from "./DailyAyah";
import DailyAyahHadith from "./DailyAyahHadith";
import DailyHadith from "./Hadith";

const DailyContent = () => {

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <DailyAyah />
      {/* <DailyHadith /> */}
      <DailyAyahHadith/>
    </div>
  );
};

export default DailyContent;
