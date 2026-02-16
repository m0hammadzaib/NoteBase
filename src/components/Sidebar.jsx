import React from 'react'

const Sidebar = ({ open, toggleDrawers }) => {
  if (!open) return null;

  return (
    <div className="fixed left-0 bg-transparent bg-opacity-50">
      <div className="bg-transparent absolute left-0 top-1 w-64 h-auto p-6 text-white">
        <button onClick={toggleDrawers} className="mb-6">
          Close
        </button>

        <ul className=" transition-all duration-1000 space-y-4 border border-white rounded-2xl p-2 bg-black [&>li]:hover:bg-amber-500 [&>li]:rounded-2xl [&>li]:p-2">
          <li>All Notes</li>
          <li>Favorites</li>
          <li>Archive</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

