import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchSurahByIdAndEdition } from "../../services/AlQuranCloudAPIServices";
import AyahList from "./AyahList";

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
        setError("Failed to load Ayahs. Please try again later.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, edition]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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
