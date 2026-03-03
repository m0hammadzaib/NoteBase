import NoteCard from "./NoteCard";

const NotesGrid = ({
  notes,
  layout,
  updateNote,
  toggleImportant,
  toggleArchive,
  moveToTrash,
  toggleTrash,
}) => {
  if (notes.length === 0) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]  dark:text-[var(--text-muted-dark)] pointer-events-none">
      <img
        src="/src/assets/empty.png"
        alt="No notes"
        className="w-60 mb-6 opacity-80"
      />

      <h2 className="text-xl font-semibold mb-2">
        No notes yet
      </h2>

    </div>
  );
}


  return (
    <div
      className={
        layout === "grid"
          // ? "grid grid-cols-3 gap-6"
          ?"grid grid-cols-1 gap-6 w-[70%] mx-auto"
          : "columns-4 gap-6"


      }
    >
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          updateNote={updateNote}
          toggleImportant={toggleImportant}
          toggleArchive={toggleArchive}
          moveToTrash={moveToTrash}
          toggleTrash={toggleTrash}
        />
      ))}
    </div>
  );
};

export default NotesGrid;
