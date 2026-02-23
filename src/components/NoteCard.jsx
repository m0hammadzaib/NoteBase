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
      {isOpen ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full bg-transparent outline-none mb-2 font-semibold text-white"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full bg-transparent outline-none resize-none text-slate-300"
          />

          <div className="flex justify-end mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="px-3 py-1 bg-blue-600 rounded text-sm"
            >
              Close
            </button>
          </div>
        </>
      ) : (
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
            <button onClick={() => toggleImportant(note.id)}>⭐</button>
            <button onClick={() => toggleArchive(note.id)}>📦</button>
            <button onClick={() => moveToTrash(note.id)} className="hover:text-red-400">
              🗑
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
