import React from 'react'
import logo from '../assets/NoteBaseLogo.png';

const Navbar = () => {
  return (
  <div className='flex justify-around bg-red-400 relative'>
  <div className='flex items-center left-5 absolute'>
    <img className='w-20 h-20 z-10' src={logo} alt="" />
    <span className='text-white font-bold text-3xl'>NoteBase</span>
  </div>
  <div className= "bg-white flex-1 h-0.5"></div>
</div>
  )
}

export default Navbar
