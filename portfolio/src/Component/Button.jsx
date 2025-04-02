import React from 'react'
import { FaDownload } from "react-icons/fa6";
function Button() {
  return (
    <div className="border-2 px-2 py-2 text-teal-200 md:px-6 md:py-2 border-teal-400 rounded-full me-2 md:me-4"> 
    <a className="flex items-center sm:text-xl" href='https://drive.google.com/uc?export=download&id=1o-6xI157ibUk8l6Nvh8SAw9442NLhR7L'>
        <FaDownload  className='me-2'/>
        <p> Download CV</p>
    </a></div> 
  )
}

export default Button