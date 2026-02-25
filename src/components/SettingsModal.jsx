import React from 'react'

const SettingsModal = ({isOpen, onClose}) => {
    if(!isOpen)return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
        <div className='bg-gray-800 p-6 rounded-2xl w-96 text-white'>
       <h2 className='font-bold text-2xl mb-4'>Settings</h2>
       <div className='mb-4'>
        <label className='block mb-1'>Example Settings</label>
        <input className='w-full bg-gray-700 outline-none rounded-xl' type="text" />
       </div>
       <button className='px-4 py-2 bg-red-700 rounded-xl' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default SettingsModal
