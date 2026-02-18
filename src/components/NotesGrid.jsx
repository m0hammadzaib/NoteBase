import NoteCard from "./NoteCard";
import React from "react";

const NotesGrid = ({ notes }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {notes.length === 0 ? (
        <p style={{ color: "white" }}>No notes yet...</p>
      ) : (
        notes.map(note => (
          <NoteCard key={note.id} title={note.title} content={note.content} />
        ))
      )}
    </div>
  );
};


export default NotesGrid;

