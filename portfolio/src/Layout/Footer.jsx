import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='py-4 text-white'>
      <hr className='bg-black'></hr>
         <div class="flex items-center justify-center pt-3">
         <IoLogoInstagram  className='mx-4 text-teal-300 hover:text-white'/>
         <FaFacebook className='mx-4 text-teal-300 hover:text-white'/>
         <FaTwitter className='mx-4 text-teal-300 hover:text-white'/>
         <FaGoogle className='mx-4 text-teal-300 hover:text-white'/>
         </div>
         <div class="flex items-center justify-center mt-4">
            <Link to="/" className='mx-1 md:mx-6 text-teal-300 hover:text-white'>Home</Link>
            <Link to="/about" className='mx-1 md:mx-6 text-teal-300 hover:text-white'>About</Link>
            <Link to="/education" className='mx-1 md:mx-6 text-teal-300 hover:text-white'>education</Link>
            <Link to="/service" className='mx-1 md:mx-6 text-teal-300 hover:text-white'>project</Link>
            <Link to="/contact" className='mx-1 md:mx-6 text-teal-300 hover:text-white'>Contact</Link>
         </div>
    </div>
  )
}

export default Footer