import NoteCard from "./NoteCard";

const NotesGrid = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      padding: "20px"
    }}>
      <NoteCard title="Idea 1" content="Some text" />
      <NoteCard title="Idea 2" content="Some text" />
      <NoteCard title="Idea 3" content="Some text" />
    </div>
  );
};

export default NotesGrid;

