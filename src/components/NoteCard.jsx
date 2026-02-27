import { useState } from "react";
import React from "react";

const NoteCard = ({
  note,
  updateNote,
  toggleImportant,
  toggleArchive,
  moveToTrash,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleClose = () => {
    updateNote(note.id, editTitle, editContent);
    setIsOpen(false);
  };

  return (
    <div
      className="break-inside-avoid bg-slate-800 rounded-xl p-4 mb-6 shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
     {isOpen && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50">
    
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] max-h-3/4 h-full bg-slate-800 p-6 rounded-2xl shadow-xl flex flex-col"
    >
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className="w-full bg-transparent outline-none mb-4 text-xl font-bold text-white"
      />

      <textarea
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
        className="flex-1 w-full bg-transparent outline-none resize-none text-slate-300"
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="px-4 py-2 bg-blue-600 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
         <>
          {note.title && (
            <h3 className="font-semibold mb-2 text-white">
              {note.title}
            </h3>
          )}
          <p className="text-sm text-slate-300 whitespace-pre-wrap">
            {note.content}
          </p>

          <div
            className="flex justify-end gap-4 mt-4 text-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => toggleImportant(note.id)}> <img  className="w-5 h-5" src="./src/assets/imp.svg"/></button>
            <button onClick={() => toggleArchive(note.id)}> <img className="w-5 h-5" src="./src/assets/archive.svg"/></button>
            <button onClick={() => moveToTrash(note.id)}><img className="w-5 h-5" src="./src/assets/trash.svg"/></button>
          </div>
        </>
    </div>
  );
};

export default NoteCard;
