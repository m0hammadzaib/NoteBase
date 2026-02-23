import React from 'react'
import { useState } from 'react';

const NoteCard = ({note,deleteNote,updateNote}) => {

  const [isOpen, setIsOpen] = useState(false);
const [editTitle, setEditTitle] = useState(note.title);
const [editContent, setEditContent] = useState(note.content);

const handleOpen = () => {
  setIsOpen(true);
};

const handleClose = () => {
  if (
    editTitle !== note.title ||
    editContent !== note.content
  ) {
    updateNote(note.id, editTitle, editContent);
  }

  setIsOpen(false);
};



  return (
    <>
    {!isOpen?(
    <div onClick={handleOpen} className='cursor-pointer'>
       <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">{note.title}</h3>
      <p className="text-gray-700 text-sm">{note.content}</p>
       <button onClick={() => deleteNote(note.id)}className="text-red-500 text-sm cursor-pointer">Delete</button>
    </div>
    </div>
    ):
    <div>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />

          <button onClick={handleClose}>
            Close
          </button>
        </div>
  }
    </>
  )
}

export default NoteCard
