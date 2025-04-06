import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='py-4 text-white'>
      <hr></hr>
         <div class="flex items-center justify-center pt-3">
         <IoLogoInstagram  className='mx-4 hover:text-teal-300'/>
         <FaFacebook className='mx-4 hover:text-teal-300'/>
         <FaTwitter className='mx-4 hover:text-teal-300'/>
         <FaGoogle className='mx-4 hover:text-teal-300'/>
         </div>
         <div class="flex items-center justify-center mt-4">
            <Link to="/" className='mx-4 md:mx-6 hover:text-teal-300'>Home</Link>
            <Link to="/work" className='mx-4 md:mx-6 hover:text-teal-300'>Work</Link>
            <Link to="/service" className='mx-4 md:mx-6 hover:text-teal-300'>Service</Link>
            <Link to="/contact" className='mx-4 md:mx-6 hover:text-teal-300'>Contact</Link>
         </div>
    </div>
  )
}

export default Footer