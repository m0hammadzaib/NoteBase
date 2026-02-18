import React from "react";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import NotesGrid from "./components/NotesGrid";
import Sidebar from "./components/Sidebar";
import AddNote from "./components/AddNote";
import { useState,useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);

  
  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar toggleDrawer={() => setOpen(prev => !prev)} />
      <Sidebar open={open} />

      <AddNote addNote={addNote} />
      <NotesGrid notes={notes} />
    </div>
  );
}


export default App;
