import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import DetailsCard from "./DetailsCard";

const APIList = () => {
  const [editions, setEditions] = useState([]);
  const [selectedEdition, setSelectedEdition] = useState(null);

  useEffect(() => {
    // Fetch editions data
    axios
      .get("http://api.alquran.cloud/v1/edition")
      .then((response) => setEditions(response.data.data))
      .catch((error) => console.error(error));
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
