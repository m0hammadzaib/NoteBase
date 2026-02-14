import React from 'react'
import nbLogo from '../assets/NbLogo.png';
import grid from "../assets/grid.svg";
import settings from "../assets/settings.svg";
import info from "../assets/info.svg";
import search from "../assets/search.svg";


const Navbar = () => {
  return (
   <div className='bg-black justify-around items-center  border-gray-300 p-5 ps-10 flex flex-row gap-20 border-b-2'>
    <div className='items-center gap-1 text-white text-3xl flex [&>span]:font-bold'>
     <img className='h-10 w-10' src={nbLogo}/>
     <span>Note</span><span className='text-amber-500'>Base</span>
    </div>
    <div className='flex flex-1 rounded-3xl  border border-gray-700 transition-all duration-200 focus:border-amber-500 ps-2 '>
      <img src={search} className='invert'/>
      <input className='bg-black
    text-white 
    flex-1
    px-4 
    py-2 
    border-none
    outline-none ' type="text" placeholder='search notes by title or content' />
    </div>
    <div className='flex gap-5 [&_img]:invert [&>button]:w-5 justify-around'>
      <button><img src={grid}/></button>
      <button><img src={info} /></button>
      <button><img src={settings} /></button>
    </div>
    <div className='right-5  flex rounded-full p-2 bg-white h-10 w-10 justify-center items-center'><span>Z</span></div>
  </div>
  )
}

export default Navbar
