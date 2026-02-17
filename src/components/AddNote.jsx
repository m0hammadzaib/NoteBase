import React from 'react'
import { useState } from 'react'

const AddNote = ({change,add}) => {
  return (
    <div>
      <div className='w-100 flex bg-black text-white border-amber-400 p-2 rounded-3xl'>
        <input onChange={change} className='w-100 bg-black text-white outline-0 bord ' type="text" placeholder='Enter your notes'/>
        <button className='p-3 border bg-black text-white rounded-3xl' onClick={add}>+</button>
      </div>
    </div>
  )
}

export default AddNote
