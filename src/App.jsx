import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NotesInput from './components/NotesInput'
import NotesGrid from './components/NotesGrid'
import { useState ,useEffect} from 'react'

const App = () => {
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
});

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

  

  const addNote=(title,content)=>{
     if(!title.trim() && !content.trim()) return;
     const newNote={
      id: Date.now(),
         title,
         content
      }
      setNotes([newNote,...notes])
  }

  const deleteNote=(id)=>{
    setNotes(prev=>prev.filter(note=> note.id != id))
  }

  return (
    <>
    <div>
     <Navbar/>
     <Sidebar/>
     <div className="ml-56 pt-24 px-10">
       <NotesInput addNote={addNote}/>
       <NotesGrid notes={notes} deleteNotes={deleteNote}/>
     </div>
    </div>
    </>
  )
}

export default App
