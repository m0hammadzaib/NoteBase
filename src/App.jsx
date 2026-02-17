import React from "react";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import NotesGrid from "./components/NotesGrid";
import Sidebar from "./components/Sidebar";
import AddNote from "./components/AddNote";
import { useState } from "react";



function App() {
  const toggleDrawer=()=>{
    setopen(prev=>!prev)
  };

  const handleSubmit = () =>{
       setnotes([...notes,change])
  };

  const [open, setopen] = useState(false);
  const [active, setactive] = useState(false);
  const [notes, setnotes] = useState([]);
  const [change, setchange] = useState("");
  return (
    <div className="bg-black max-h-25">
      <Navbar toggleDrawer={()=>setopen(prev=>!prev)} />
        <Sidebar open={open} toggleDrawers={toggleDrawer}/>
        <AddNote add={handleSubmit} change={setchange}/>
      <NoteCard notes={notes}/>
    </div>
  );
}

export default App;
