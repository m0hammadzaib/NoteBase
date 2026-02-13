const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">NoteBase</h1>
      <input
        className="bg-gray-800 px-4 py-2 rounded-lg outline-none"
        placeholder="Search notes..."
      />
    </div>
  );
};

export default Navbar;
