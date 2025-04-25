import React from 'react'
import {CalendarDays} from 'lucide-react';
import projectimg from '../assets/Screenshot 2025-04-08 113842.png'
import ecommerceproject from "../assets/ecommerceproject.png"
function Service() {
  return (
    <div style={{backgroundColor:"#042c30"}}>
    <h1 class="text-center  text-5xl py-10">Projects</h1>
    <div 
              initial={{ y: 100, opacity: 0 }} // Start below and invisible
              whileInView={{ y: 0, opacity: 1 }} // Animate when visible
              transition={{ duration: 0.5, ease: "easeIn" }}
            className='flex  justify-center flex-wrap max-w-210'>
                <div className=' content w-[500px] text-black p-5 m-7 '>
                  <div className='flex text-teal-300'>
                         <img className='rounded-xl' src={projectimg}/>
                  </div>
                      <div className='text-white text-xl'>
                          Quick Notes Application Create by using react js aur data are stored in the local Storage.
                      </div>
                </div> 
                <div className=' content w-[500px] text-black p-5 m-7 '>
                  <div className='flex text-teal-300'>
                         <img className='rounded-xl w-full object-fill'  src={ecommerceproject}/> 
                  </div>
                      <div className='text-white text-xl'>
                          E-commerce Application Created by using React js in Frontend and Backend By using node.js , DataBase Used as MongoDB.
                      </div>
                </div>  
                          
           </div> 
</div>
  )
}

export default Service