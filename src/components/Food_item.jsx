import React, { useState } from 'react'

function Food_item({foodName }) {
    const [number, setNumber] = useState(0)
  return (
    <div className='flex justify-end items-center border-0 border-white p-2 rounded-lg w-[350px]'>
        <p className=' bg-blue-700  text-start'>{foodName || 'Chicken Biryani'}</p>
        <button>-</button>
        <span>{number}</span>
        <button>+</button>
    </div>
  )
}

export default Food_item