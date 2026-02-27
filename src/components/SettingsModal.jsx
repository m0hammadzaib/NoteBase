import React from "react";

const SettingsModal = ({
  setIsSettingsOpen,
  theme,
  setTheme,
  layout,
  setLayout,
  sortType,
  setSortType,
  notes,
  setNotes,
}) => {
  const clearTrash = () => {
    const filtered = notes.filter((note) => !note.isTrashed);
    setNotes(filtered);
  };

  const deleteAllNotes = () => {
    setNotes([]);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md bg-opacity-70 flex justify-center items-center z-50">

      <div className={`modal-animate p-6 rounded-2xl w-96 space-y-6 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >
        <h2 className="font-bold text-2xl">Settings</h2>

        {/* Theme */}
        <div>
          <p className="font-semibold mb-2">Theme</p>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        {/* Layout */}
        <div>
          <p className="font-semibold mb-2">Layout</p>
          <select
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="masonry">Masonry</option>
            <option value="grid">Grid</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <p className="font-semibold mb-2">Sort By</p>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-gray-600 pt-4 space-y-3">
          <p className="font-semibold text-red-500">Danger Zone</p>

          <button
            onClick={clearTrash}
            className="w-full bg-yellow-600 py-2 rounded-lg"
          >
            Clear Trash
          </button>

          <button
            onClick={deleteAllNotes}
            className="w-full bg-red-700 py-2 rounded-lg"
          >
            Delete All Notes
          </button>
        </div>

        <button
          onClick={() => setIsSettingsOpen(false)}
          className="w-full bg-gray-600 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
