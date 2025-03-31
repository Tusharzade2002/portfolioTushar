import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='py-4 text-white'>
         <div class="flex items-center justify-center">
         <IoLogoInstagram  className='mx-4'/>
         <FaFacebook className='mx-4'/>
         <FaTwitter className='mx-4'/>
         <FaGoogle className='mx-4'/>
         </div>
         <div class="flex items-center justify-center mt-4">
            <Link to="/" className='mx-4 md:mx-6'>Home</Link>
            <Link to="/work" className='mx-4 md:mx-6'>Work</Link>
            <Link to="/service" className='mx-4 md:mx-6'>Service</Link>
            <Link to="/contact" className='mx-4 md:mx-6'>Contact</Link>
         </div>
    </div>
  )
}

export default Footer