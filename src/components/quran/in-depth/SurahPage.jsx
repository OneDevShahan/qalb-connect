import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchSurahByIdAndEdition } from "../../services/AlQuranCloudAPIServices";
import AyahList from "./AyahList";
import LoadingIcon from "../../base/LoadingIcon";
import { API_FAILURE_MSG } from "../../utility/Contant";

const SurahPage = ({ showToast }) => {
  const { id } = useParams();
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [edition, setEdition] = useState("en.asad");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSurahByIdAndEdition(id, edition);
        setAyahs(data);
      } catch (err) {
        setError(API_FAILURE_MSG, err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, edition]);

  if (loading)
    return (
      <div>
        <div className="flex flex-col items-center justify-center text-red-500">
          <div className="mb-2 text-green-500 dark:text-green-400">
            Data is loading...
          </div>
          <LoadingIcon height="h-20" width="w-20" color="yellow" />
        </div>
      </div>
    );
  if (error) return <div className="font-bold text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className=" flex justify-center items-center mb-4">
        <label
          htmlFor="edition"
          className="block mr-2 text-xl font-medium dark:text-white"
        >
          Choose Edition:
        </label>
        <select
          id="edition"
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="en.asad">Muhammad Asad (English)</option>
          <option value="ar.alafasy">Mishary Alafasy (Arabic)</option>
          <option value="en.pickthall">Marmaduke Pickthall (English)</option>
        </select>
      </div>
      <AyahList surah={ayahs} showToast={showToast} />
    </div>
  );
};
SurahPage.propTypes = {
  showToast: PropTypes.func.isRequired,
};

export default SurahPage;
