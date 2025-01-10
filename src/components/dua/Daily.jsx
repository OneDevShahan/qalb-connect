import React from 'react'
import DuaCard from './DuaCard';
import { sampleDua } from '../utility/Contant';

function Daily() {
  return (
    <>
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-white">
        <DuaCard {...sampleDua} />
      </div>
    </>
  );
}

export default Daily;
