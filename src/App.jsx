import React from "react";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import NotesGrid from "./components/NotesGrid";

function App() {
  return (
    <div>
      <Navbar />
       <NoteCard
        title="Project Ideas"
        content="Build portfolio, Start blog"
      />
      <NotesGrid/>
    </div>
  );
}

export default App;
