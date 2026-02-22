import React from 'react'

const NoteCard = ({note,deleteNote}) => {
  return (
    <div>
       <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">{note.title}</h3>
      <p className="text-gray-700 text-sm">{note.content}</p>
       <button onClick={() => deleteNote(note.id)}className="text-red-500 text-sm cursor-pointer">Delete</button>
    </div>
    </div>
  )
}

export default NoteCard
