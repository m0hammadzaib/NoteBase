import { useState } from "react";
import React from "react";
import ImportantIcon from "../assets/imp.svg?react";
import ArchiveIcon from "../assets/archive.svg?react";
import TrashIcon from "../assets/trash.svg?react";
import RestoreIcon from "../assets/restore.svg?react";
import UnArchive from "../assets/unarchive.svg?react";


const NoteCard = ({
  note,
  updateNote,
  toggleImportant,
  toggleArchive,
  moveToTrash,
  toggleTrash,
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
      className={`break-inside-avoid block bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary-dark)] rounded-xl p-4 mb-6 shadow-md hover:shadow-xl transition duration-200 cursor-pointer max-h-[400px] overflow-hidden border border-transparent hover:border-gray-400`}
      onClick={() => setIsOpen(true)}
    >
     {isOpen && !note.isTrashed? (
  <div className="fixed inset-0 bg-[var(--bg-overlay)] dark:bg-[var(--bg-overlay-dark)] backdrop-blur-md flex justify-center items-center z-50 ">
    
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] max-h-3/4 h-full bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary-dark)] p-6 rounded-2xl shadow-xl flex flex-col">
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className="w-full bg-transparent outline-none mb-4 text-xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary-dark)] rounded-xl"
      />

      <textarea
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
        className="flex-1 w-full bg-transparent outline-none text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)] rounded-xl whitespace-normal breaks-word"
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="px-4 py-2 bg-[var(--bg-blue)] dark:bg-[var(--bg-blue-dark)] rounded-lg text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
):""}
         <>
          {note.title && (
            <h3 className="font-semibold mb-2 text-[var(--text-primary) dark:text-[var(--text-primary-dark)]">
              {note.title}
            </h3>
          )}
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)] whitespace-pre-wrap line-clamp-12">
            {note.content}
          </p>

          <div
            className="flex justify-end gap-4 mt-4 text-[var(--text-muted)] dark:text-[var(--text-muted-dark)]"
            onClick={(e) => e.stopPropagation()}
          >
            {note.isTrashed?(
              <button onClick={()=>toggleTrash(note.id)}>
                <RestoreIcon className={'w-5 h-5 invert dark:invert-0'}/>
                </button>
            ):""}
            <button  className={`${note.isTrashed?"hidden":""} cursor-pointer`} onClick={() => toggleImportant(note.id)}> 
              <ImportantIcon className={`h-4 w-4 invert dark:invert-0 ${note.isImportant?"fill-[var(--icon-fill)] dark:fill-[var(--icon-fill-dark)]":"fill-none"}`}/>
              </button>
            <button className={`${note.isTrashed?"hidden":""} cursor-pointer`} onClick={() => toggleArchive(note.id)}> 
              {note.isArchived?(
                <UnArchive className='w-4 h-4 invert dark:invert-0'/> 
              ):
              <ArchiveIcon className={`w-4 h-4 invert dark:invert-0`}/>
              }
              </button>
            <button className={`${note.isTrashed?"hidden":""} cursor-pointer`} onClick={() => moveToTrash(note.id)}>
              <TrashIcon className={`w-4 h-4 invert dark:invert-0`}/>
              </button>
          </div>
        </>
    </div>
  );
};

export default NoteCard;
