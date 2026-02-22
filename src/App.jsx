import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NotesInput from './components/NotesInput'
import NotesGrid from './components/NotesGrid'
import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([
    {id:1,title:"ZaibOne",content:"this is zaibOne notes"},
    {id:2,title:"ZaibTwo",content:"this is zaibTwo notes"}
  ]);

  const addNote=(title,content)=>{
     if(!title.trim() && !content.trim()) return;
     const newNote={
      id: Date.now(),
         title,
         content
      }
      setNotes([newNote,...notes])
  }

  return (
    <>
    <div>
     <Navbar/>
     <Sidebar/>
     <div className="ml-56 pt-24 px-10">
       <NotesInput addNote={addNote}/>
       <NotesGrid notes={notes}/>
     </div>
    </div>
    </>
  )
}

export default App
