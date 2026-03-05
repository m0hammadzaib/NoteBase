import React from 'react'

const Sidebar = ({ activeFilter, setActiveFilter }) => {
  const itemClass = (type) =>
    `mb-4 cursor-pointer ${
      activeFilter === type
        ? "text-[var(--text-main)] dark:text-[var(--text-main-dark)] font-semibold"
        : "text-[var(--text-muted)] dark:text-[var(--text-muted-dark)] hover:text-white"
    }`;

  return (
    <div className="w-56 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary-dark)] h-screen fixed top-16 left-0 p-6 border-r border-[var(--bg-tertiary)] dark:border-[var(--bg-tertiary-dark)] ">
      <div className="mb-6 font-semibold text-[var(--text-main)] dark:text-[var(--text-main-dark)]">Notes</div>

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

