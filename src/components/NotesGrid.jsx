import NoteCard from "./NoteCard";

const NotesGrid = ({
  notes,
  updateNote,
  toggleImportant,
  toggleArchive,
  moveToTrash,
}) => {
  if (notes.length === 0) {
    return <p className="text-slate-400">No notes found.</p>;
  }

  return (
    <div className="columns-4 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          updateNote={updateNote}
          toggleImportant={toggleImportant}
          toggleArchive={toggleArchive}
          moveToTrash={moveToTrash}
        />
      ))}
    </div>
  );
};

export default NotesGrid;
