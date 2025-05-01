import React from 'react'
import { FaDownload } from "react-icons/fa6";
function Button() {
  return (
    <div className="border-2 px-2 py-2 text-teal-200 md:px-6 md:py-2 border-teal-400 rounded-full me-2 md:me-4"> 
    <a className="flex items-center sm:text-xl" target='blank' href='https://drive.google.com/file/d/1TiR0A2gDdbY9iEVxIpZlR_lKoia7Wmdk/view'>
        <FaDownload  className='me-2'/>
        <p> Download CV</p>
    </a></div> 
  )
}

export default Button