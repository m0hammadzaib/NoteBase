import { useState } from "react";
import React from "react";
import ImportantIcon from "../assets/imp.svg?react";
import ArchiveIcon from "../assets/archive.svg?react";
import TrashIcon from "../assets/trash.svg?react";


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
      className={`break-inside-avoid block bg-[var(--bg-secondary)] rounded-xl p-4 mb-6 shadow-md hover:shadow-xl transition duration-200 cursor-pointer max-h-[400px] overflow-hidden `}
      onClick={() => setIsOpen(true)}
    >
     {isOpen && (
  <div className="fixed inset-0 bg-[var(--bg-overlay)] backdrop-blur-md flex justify-center items-center z-50">
    
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] max-h-3/4 h-full bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-xl flex flex-col"
    >
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className="w-full bg-transparent outline-none mb-4 text-xl font-bold text-[var(--text-primary)] rounded-xl"
      />

      <textarea
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
        className="flex-1 w-full bg-transparent outline-none resize-none text-[var(--text=secondary)] rounded-xl"
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="px-4 py-2 bg-[var(--bg-blue)] rounded-lg text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
         <>
          {note.title && (
            <h3 className="font-semibold mb-2 text-[var(--text-primary)]">
              {note.title}
            </h3>
          )}
          <p className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap line-clamp-6">
            {note.content}
          </p>

          <div
            className="flex justify-end gap-4 mt-4 text-[var(--text-muted)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => toggleImportant(note.id)}> 
              {/* <img  className={`w-4 h-4`} style={{ filter: "var(--icon-filter)" }} src="./src/assets/imp.svg"/> */}
              <ImportantIcon className={`h-4 w-4 ${note.isImportant?"stroke-yellow-800":"stroke-none"}`} style={{ filter: "var(--icon-filter)" }}/>
              </button>
            <button onClick={() => toggleArchive(note.id)}> 
              {/* <img className={`w-4 h-4`} style={{ filter: "var(--icon-filter)" }} src="./src/assets/archive.svg"/> */}
              <ArchiveIcon className={`w-4 h-4 `} style={{filter:"var(--icon-filter)"}}/>
              </button>
            <button onClick={() => moveToTrash(note.id)}>
              <TrashIcon className={`w-4 h-4`} style={{filter:"var(--icon-filter)"}}/>
              {/* <img className={`w-4 h-4`} style={{ filter: "var(--icon-filter)" }} src="./src/assets/trash.svg"/> */}
              </button>
          </div>
        </>
    </div>
  );
};

export default NoteCard;
