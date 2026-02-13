import React from 'react'
import nbLogo from '../assets/NB.png';
import layout from '../assets/layout.png';
import info from '../assets/info.png';
import settings from '../assets/settings.png';
import set from '../assets/settings.png';

const Navbar = () => {
  return (
   <div className='bg-gray-900 justify-between items-center border-b-2 border-gray-300 p-5 ps-10 flex flex-row'>
    <div className='items-center gap-1 text-white text-3xl flex'>
     <img className='h-10 w-10' src={nbLogo}/>
      NoteBase
    </div>
    <div className='flex flex-1 justify-center'>
      <input className='p-4 ps-7 rounded-2xl bg-gray-500 outline-0 text-white w-90 border border-gray-700' type="text" placeholder='search your notes' />
    </div>
    <div className='flex gap-5 [&>button]:w-5 justify-around'>
      <button><img src={layout}/></button>
      <button><img src={info}/></button>
      <button><img src={settings}/></button>
    </div>
  </div>
  )
}

export default Navbar
