import React from 'react'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div className=' flex flex-col transition-all duration-1000 space-y-4 border border-white rounded-2xl p-2 bg-black [&>button]:hover:bg-amber-500 [&>button]:rounded-2xl [&>button]:p-2 [&>button]:left-2'>
      <button onClick={() => setActiveTab("all")}>All</button>
      <button onClick={() => setActiveTab("fav")}>Favorites</button>
      <button onClick={() => setActiveTab("archive")}>Archive</button>

      </div>
    </div>
  );
};


export default Tabs
