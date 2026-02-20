import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-slate-800 fixed w-full top-0 z-50 shadow-md flex items-center justify-between px-6'>
     <div className='flex items-center gap-3'>
       <div className="w-8 h-8 bg-blue-600 rounded-md" />
       <h1 className='text-lg font-semibold text-white'>NoteBase</h1>
     </div>
     <input className='w-1/3 bg-slate-700 px-4 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 h-10' type="text"  placeholder='search your notes'/>
     <div className="flex items-center gap-4">
  <button className="text-slate-400 hover:text-white transition">
    Settings
  </button>

  <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center font-semibold">
    Z
  </div>
</div>

    </div>
  )
}

export default Navbar
