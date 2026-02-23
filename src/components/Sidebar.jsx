import React from 'react'

const Sidebar = ({ activeFilter, setActiveFilter }) => {
  const itemClass = (type) =>
    `mb-4 cursor-pointer ${
      activeFilter === type
        ? "text-white font-semibold"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <div className="w-56 bg-slate-800 h-screen fixed top-16 left-0 p-6 border-r border-slate-700">
      <div className="mb-6 font-semibold text-white">Notes</div>

      <div className={itemClass("notes")} onClick={() => setActiveFilter("notes")}>
        All Notes
      </div>

      <div className={itemClass("important")} onClick={() => setActiveFilter("important")}>
        Important
      </div>

      <div className={itemClass("archive")} onClick={() => setActiveFilter("archive")}>
        Archive
      </div>

      <div className={itemClass("trash")} onClick={() => setActiveFilter("trash")}>
        Trash
      </div>
    </div>
  );
};

export default Sidebar;

