import { useState } from "react";

const NotesInput = ({ addNote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    addNote(title, content);
    setTitle("");
    setContent("");
    setIsOpen(false);
  };

  return (
    <div className="max-w-xl mx-auto mb-10">
      <div
        onClick={() => setIsOpen(true)}
        className="bg-[var(--bg-secondary)] rounded-xl p-4 shadow-md cursor-text"
      >
        {isOpen && (
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent outline-none mb-2 font-semibold text-[var(--text-primary)] rounded-l"
          />
        )}

        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={isOpen ? 3 : 1}
          className="w-full bg-transparent outline-none resize-none text-[var(--text-secondary)] rounded-xl"
        />

        {isOpen && (
          <div className="flex justify-end mt-3">
            <button
              onClick={handleAdd}
              className="px-4 py-1.5 bg-[var(--bg-blue)] rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesInput;
