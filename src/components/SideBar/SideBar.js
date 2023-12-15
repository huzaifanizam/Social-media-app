import React from 'react'


const SideBar = ({ name }) => {
  return (
    <div className='p-3 w-[300px] bg-gray-700 border-spacing-1 text-gray-400 sidebar'>
         <h1>{name ? `Welcome - ${name}` : "Log in Please"}</h1>
    </div>
  )
}

export default SideBar
