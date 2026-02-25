import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NotesInput from "./components/NotesInput";
import NotesGrid from "./components/NotesGrid";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // settings modal states and features
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
const [theme, setTheme] = useState("dark");
const [layout, setLayout] = useState("masonry");
const [sortType, setSortType] = useState("newest");


  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("notes"); 
  // notes | important | archive | trash

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    if (!title.trim() && !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      isImportant: false,
      isArchived: false,
      isTrashed: false,
      createdAt: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, newTitle, newContent) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, content: newContent }
          : note
      )
    );
  };

  const toggleImportant = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, isImportant: !note.isImportant }
          : note
      )
    );
  };

  const toggleArchive = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, isArchived: !note.isArchived }
          : note
      )
    );
  };

  const moveToTrash = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isTrashed: true } : note
      )
    );
  };

  const filteredNotes = notes
    .filter((note) => {
      if (activeFilter === "important") return note.isImportant && !note.isTrashed;
      if (activeFilter === "archive") return note.isArchived && !note.isTrashed;
      if (activeFilter === "trash") return note.isTrashed;
      return !note.isArchived && !note.isTrashed;
    })
    .filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="ml-56 pt-24 px-10">
        <NotesInput addNote={addNote} />
        <NotesGrid
          notes={filteredNotes}
          updateNote={updateNote}
          toggleImportant={toggleImportant}
          toggleArchive={toggleArchive}
          moveToTrash={moveToTrash}
        />
      </div>
      {isSettingsOpen && (
  <SettingsModal
    setIsSettingsOpen={setIsSettingsOpen}
    theme={theme}
    setTheme={setTheme}
    layout={layout}
    setLayout={setLayout}
    sortType={sortType}
    setSortType={setSortType}
    notes={notes}
    setNotes={setNotes}
  />
)}
    </div>
  );
};

export default App;
