import { useState, useEffect } from "react";
import Card from "./Card";
import DetailsCard from "./DetailsCard";
import { fetchQuranEditionsAvailable } from "../services/AlQuranCloudAPIServices";

const APIList = () => {
  const [editions, setEditions] = useState([]);
  const [selectedEdition, setSelectedEdition] = useState(null);

  useEffect(() => {
    // Fetch editions data
    const fetchData = async () => {
      const data = await fetchQuranEditionsAvailable();
      setEditions(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Card List */}
      <div className="flex flex-wrap gap-4 justify-center md:w-2/3">
        {editions.map((edition) => (
          <Card
            key={edition.identifier}
            edition={edition}
            onClick={() => setSelectedEdition(edition)}
          />
        ))}
      </div>

      {/* Details Card */}
      <div className="md:w-1/3">
        <DetailsCard edition={selectedEdition} />
      </div>
    </div>
  );
};

export default APIList;
