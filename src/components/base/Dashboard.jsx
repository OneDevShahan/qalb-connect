import React from "react";
import DuaCard from "../dua/DuaCard";

function Dashboard({sampleDua}) {
  return (
    <>
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DuaCard {...sampleDua} />
        <DuaCard {...sampleDua} />
      </div>
    </>
  );
}

export default Dashboard;
