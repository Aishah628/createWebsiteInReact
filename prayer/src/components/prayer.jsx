import React from 'react'

export default function Prayer ({name,time}) {
  return (
    <div className='prayer'>
        <p className='name-of-prayer'>{name}</p> 
        <p className='time-of-prayer'>{time}</p> 


    </div>
  )
}

