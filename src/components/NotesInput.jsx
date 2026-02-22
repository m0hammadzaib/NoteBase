import React from 'react'
import { useState } from 'react'

const NotesInput = ({addNote}) => {
    const [isOpen, setisOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAdd=()=>{
    if (!title.trim() && !content.trim()) return;
      addNote(title,content);
      setTitle("");
      setContent("");
      setisOpen(false);
    }
  return (
    <div className='p-4 bg-white shadow rounded-xl'>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className='border p-2 w-full mb-2' />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} name="" id="" placeholder='Write you notes...' className='border p-2 w-full mb-2'></textarea>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  )
}

export default NotesInput
