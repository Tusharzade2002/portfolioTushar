import React from 'react'
import { CalendarDays } from 'lucide-react'
import './work.css'
import { motion } from 'framer-motion'
function Work() {
  return (
        
        
     <div style={{backgroundColor:"#001433"}} className='py-10'> 
        <motion.h1 
         initial={{ y: -100, opacity: 0 }} // Start above and invisible
         whileInView={{ y: 0, opacity: 1 }} // Animate when visible
         transition={{ duration: 0.5, ease: "easeIn" }}
           class="text-center text-5xl  text-white py-6 ">Education
        </motion.h1>
            <motion.div 
              initial={{ y: 100, opacity: 0 }} // Start below and invisible
              whileInView={{ y: 0, opacity: 1 }} // Animate when visible
              transition={{ duration: 0.5, ease: "easeIn" }}
            className='flex  justify-center flex-wrap max-w-210'>
                <div className=' content w-[500px] text-white p-5 m-7 '>
                  <div className='flex text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2018</p>
                  </div>
                      <p className='text-2xl my-5'>SSC</p>
                      <p className='text-xl'>I completed my Secondary School Certificate (SSC) from Balaji Convent School Butibori. During this crucial phase of my education, I achieved an immpressive <p className=' inline text-teal-300'>score of 74.80% </p> </p>
                </div> 

                <div className=' w-[500px] text-white p-5 m-7 '>
                <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2019-2020</p>
                  </div>
                      <p className='text-2xl my-5'>HSC</p>
                      <p className='text-xl'>I completed my Higher Secondary School Certificate (HSSC) from Balaji Junior college Butibori, where I achieved <p className=' inline text-teal-300'> score of 62.31% </p></p>
                </div> 

                <div className=' w-[500px] text-white  p-5 m-7 '>
                  <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2020-2023</p>
                  </div>
                      <p className='text-2xl my-5'>Bachelors Degree - RTMN University</p>
                      <p className='text-xl'>I earned my Bachelor's degree in Bachelors of Computer Application from City Premier College. Reflecting my dedication to learning and excelling in my field of study.<p className=' inline text-teal-300'> score of 56.31% </p></p>
                </div> 

                <div className=' w-[500px] text-white  p-5 m-7'>
                    <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2023-2025</p>
                    </div>
                      <p className='text-2xl my-5'>Master's of Computer Application</p>
                      <p className='text-xl'>74%</p>
                </div> 
                {/* <div className="relative inline-block group px-4 py-2 font-semibold text-white overflow-hidden">
      <span className="relative z-10">Hover Me</span>
      
      <span className="absolute bottom-0 left-0 h-10 w-0 bg-blue-500 
                       group-hover:w-full transition-all duration-500 ease-in-out z-0">hover
      </span>
    </div> */}
           </motion.div>         
    </div>
  
  )
}

export default Work