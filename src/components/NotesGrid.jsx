import React from 'react'
import NoteCard from './NoteCard'

const NotesGrid = ({notes}) => {
     if (notes.length === 0) {
    return <p>No notes yet. Start by adding one!</p>;
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
   {notes.map(note=>(
      <NoteCard key={note.id} note={note} />
   ))}
    </div>
  )
}

export default NotesGrid
