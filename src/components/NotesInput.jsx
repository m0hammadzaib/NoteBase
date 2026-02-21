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
    <div>
      
    </div>
  )
}

export default NotesInput
