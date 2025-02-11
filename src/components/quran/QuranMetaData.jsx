import { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { GiBookAura, GiSpellBook } from "react-icons/gi";
import { LuBadgeInfo, LuBookKey, LuHeartHandshake } from "react-icons/lu";
import { PiBookBookmark } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import LoadingIcon from "../base/LoadingIcon";
import { fetchQuranMetaData } from "../services/AlQuranCloudAPIServices";
import { API_FAILURE_MSG } from "../utility/Contant";

const QuranMetaData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuranMetaData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(API_FAILURE_MSG, err);
        setError(API_FAILURE_MSG);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center text-red-500">
        <div className="mb-2 text-green-500 dark:text-green-400">
          Data is loading...
        </div>
        <LoadingIcon height="h-20" width="w-20" color="red" />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-600 font-semibold">{error}</div>
    );

  return (
    <div className="container mx-auto px-4 py-6 my-10 ">
      <h2 className="text-2xl font-semibold text-center dark:text-white">
        <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
          <LuBadgeInfo size={25} className="text-lg mr-2 text-green-500" />
          More About Quran
        </div>
        <div className="flex justify-center text-center">
          <hr className="text-center w-4/5 sm:w-1/2 md:w-1/4 mt-3 mb-8" />
        </div>
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore the Quran&apos;s metadata, including the total number of Ayahs,
        Surahs, Sajdas, Rukus, Pages, Manzils, Hizb Quarters, and Juzs this API
        presents.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <GiBookAura className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Ayahs</h3>
          </div>
          <p className="text-center text-3xl font-bold">{data.ayahs.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <GiSpellBook className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Surahs</h3>
          </div>
          <p className="text-center text-3xl font-bold">{data.surahs.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <GiSpellBook className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">First Surah</h3>
          </div>
          <p className="p-2 text-center text-xl font-bold">
            {data.surahs.references[0].name}(
            {data.surahs.references[0].englishName})
          </p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <GiSpellBook className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Last Surah</h3>
          </div>
          <p className="p-2 text-center text-xl font-bold">
            {data.surahs.references[113].name}(
            {data.surahs.references[113].englishName})
          </p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <FaBookReader className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Sajdas</h3>
          </div>
          <p className="text-center text-3xl font-bold">{data.sajdas.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <LuHeartHandshake className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Rukus</h3>
          </div>
          <p className="text-center text-3xl font-bold">{data.rukus.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <RiPagesLine className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Pages</h3>
          </div>
          <p className="text-center text-3xl font-bold">{data.pages.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <LuBookKey className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Manzils</h3>
          </div>
          <div className="text-center md:w-1/2 mx-auto mb-3"></div>
          <p className="text-center text-3xl font-bold">{data.manzils.count}</p>
        </div>

        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <SiBookstack className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Hizb Quarters</h3>
          </div>
          <p className="text-center text-3xl font-bold">
            {data.hizbQuarters.count}
          </p>
        </div>
        <div
          className="p-6 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl rounded-xl overflow-hidde dark:text-white"
        >
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <PiBookBookmark className="mr-1 text-green-500" />
            <h3 className="text-lg font-semibold mb-1">Total Juzs</h3>
          </div>
          <div className="text-center md:w-1/2 mx-auto mb-3"></div>
          <p className="text-center text-3xl font-bold">{data.juzs.count}</p>
        </div>
      </div>
    </div>
  );
};

export default QuranMetaData;
