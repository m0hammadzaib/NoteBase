import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NotesInput from './components/NotesInput'

const App = () => {
  const [notes, setNotes] = useState([]);
  
  return (
    <>
    <div>
     <Navbar/>
     <Sidebar/>
     <div className="ml-56 pt-24 px-10">

     </div>
    </div>
    </>
  )
}

export default App
