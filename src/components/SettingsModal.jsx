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
 <div className="fixed inset-0 bg-[var(--bg-overlay)] backdrop-blur-md flex justify-center items-center z-50">

  <div className="w-[360px] bg-[var(--bg-secondary)] rounded-2xl shadow-xl p-6 space-y-6 border border-[var(--bg-tertiary)]">

    {/* Header */}
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
        Settings
      </h2>
      <button
        onClick={() => setIsSettingsOpen(false)}
        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition text-sm"
      >
        ✕
      </button>
    </div>

    {/* Options */}
    <div className="space-y-4">

      <div className="space-y-1">
        <label className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
          Theme
        </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[var(--bg-blue)] transition"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
          Layout
        </label>
        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[var(--bg-blue)] transition"
        >
          <option value="masonry">Masonry</option>
          <option value="grid">Grid</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
          Sort
        </label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[var(--bg-blue)] transition"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

    </div>

    {/* Subtle Divider */}
    <div className="border-t border-[var(--bg-tertiary)] pt-4 space-y-3">

      <button
        onClick={clearTrash}
        className="w-full py-2 rounded-lg text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-yellow)] hover:text-black transition"
      >
        Clear Trash
      </button>

      <button
        onClick={deleteAllNotes}
        className="w-full py-2 rounded-lg text-sm bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-red)] hover:text-white transition"
      >
        Delete All Notes
      </button>

    </div>

  </div>
</div>



  );
};

export default SettingsModal;
