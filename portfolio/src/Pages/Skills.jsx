import React from 'react'
import {motion} from 'framer-motion'
import html from "../assets/html-5.png"
import css from '../assets/css-3.png'
import javascript from '../assets/js.png'
import react from '../assets/atom.png'
import tailwind from "../assets/Tailwind CSS.png"
import bootstrap from "../assets/bootstrap.png"
import express from "../assets/icons8-express-js-50.png"
import node from "../assets/icons8-nodejs-48.png"
function Skills() {
  return (
    <motion.div style={{backgroundColor:"#001433"}} className='p-10'>
        <div className='flex flex-wrap justify-center items-center  mx-2 bg-[#021d4fe7]'>

           <div className='bg-[#021d4f] flex flex-col justify-center items-center  drop-shadow max-w-20 md:max-w-40  md:mx-10 p-2 md:p-8 m-5'> 
                <img src={html} alt='html-logo'/>
                <p className='text-sm mt-3'>HTML</p>
           </div>

           <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10  p-2 m-5'>
                <img src={css} alt='html-logo'/>
                <p className='text-sm mt-3' >CSS</p>
           </div>
           <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={javascript} alt='html-logo'/>
                <p className='text-sm mt-3' >JavaScript</p>
           </div>
           <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={react} alt='html-logo'/>
                <p className='text-sm mt-3' >React.js</p>
           </div>
            <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={tailwind} alt='html-logo'/>
                <p className='text-sm mt-3' >Tailwindcss</p>
           </div>
            <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={bootstrap} alt='html-logo'/>
                <p className='text-sm mt-3' >Bootstarp</p>
           </div>
            <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={express} className='w-36' alt='html-logo'/>
                <p className='text-sm mt-3' >Express.js</p>
           </div>
             <div className='bg-[#021d4f] flex flex-col justify-center items-center drop-shadow max-w-20 md:max-w-40 md:p-8 md:mx-10 p-2 m-5'>
                <img src={node} className='w-36' alt='html-logo'/>
                <p className='text-sm mt-3' >node</p>
           </div>
          

           
        </div>
    </motion.div>
  )
}

export default Skills