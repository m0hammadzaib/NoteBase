import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-56 bg-slate-800 h-screen fixed top-16 left-0 border-r border-slate-700 p-5'> 
      <div className='mb-6 font-semibold text-white'>
         <div className='mb-4 text-slate-400 hover:text-white cursor-pointer'>Important</div>
         <div className='mb-4 text-slate-400 hover:text-white cursor-pointer'>Archive</div>
         <div className='text-slate-400 hover:text-white cursor-pointer'>Trash</div>
      </div>
    </div>
  )
}

export default Sidebar
