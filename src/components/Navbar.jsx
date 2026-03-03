import React from "react";
import  SettingsIcon from "../assets/settings.svg";

const Navbar = ({ searchTerm, setSearchTerm,setIsSettingsOpen }) => {
  return (
    <div className="h-16 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary-dark)]   fixed w-full top-0 z-50 shadow-md flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md">
          <img src="https://www.svgrepo.com/show/190652/test.svg" alt="NoteBase Logo" />
        </div>
        <h1 className="text-lg font-semibold text-[var(--text-primary)]">NoteBase</h1>
      </div>

      <input
        type="text"
        placeholder="Search your notes...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/3 bg-[var(--bg-tertiary)] px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-4 relative">
        <button onClick={() => setIsSettingsOpen(true)}>
          <img  className={`w-6 h-6  invert` } style={{ filter: "var(--icon-filter)" }} src={SettingsIcon}/>
       </button>
      </div>
    </div>
  );
};

export default Navbar;
