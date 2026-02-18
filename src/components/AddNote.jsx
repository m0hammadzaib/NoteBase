import React from 'react';
import { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    const newNote = {
      id: Date.now(),
      title: input,
      content: ""
    };

    addNote(newNote);
    setInput("");
  };

  return (
    <div className='w-100 border-white border rounded-3xl p-4 relative' >
      <input className='text-white  outline-0'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />
      <button className='text-white p-3 border-white border rounded-3xl right-3 fixed' onClick={handleAdd}>+</button>
    </div>
  );
};


export default AddNote
