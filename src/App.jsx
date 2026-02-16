import React from "react";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import NotesGrid from "./components/NotesGrid";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


function App() {
  const toggleDrawer=()=>{
    setopen(prev=>!prev)
  };

  const [open, setopen] = useState(false);
  return (
    <div className="bg-black max-h-25">
      <Navbar toggleDrawer={()=>setopen(prev=>!prev)} />
        <Sidebar open={open} toggleDrawers={toggleDrawer}/>
       <NoteCard
        title="Project Ideas"
        content="Build portfolio, Start blog"
      />
      <NotesGrid/>
    </div>
  );
}

export default App;
