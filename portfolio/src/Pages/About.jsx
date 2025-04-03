import React, { useEffect } from 'react'
import logo from '../assets/WhatsApp  Image 2025-03-17 at 12.05.43 PM.jpeg'

import { motion } from "framer-motion";
import Button from '../Component/Button';
import { useState } from 'react'
function About() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(true); // Trigger animation on page load
  }, []); 
  return (
    <div style={{backgroundColor:"#042c30"}}>
                   <motion.div  
                            initial={{ y: -100, opacity: 0 }} // Start above and invisible
                            whileInView={{ y: 0, opacity: 1 }} // Animate when visible
                            transition={{ duration: 0.5, ease: "easeIn" }}
                              className=' py-8 flex justify-center text-4xl'> 
                              <p className='text-center me-4'>About</p>
                              <p className='text-teal-400 text-center'>Me</p>
                    </motion.div> 
                   <div className=' flex justify-center'>
                    <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }} // Start slightly small & invisible
                        whileInView={{ scale: 1, opacity: 1 }} // Zoom in when visible
                        transition={{ duration: 1, ease: "easeOut" }}
                        className='  rounded-full w-[200px] h-[200px] 'src={logo} alt='...'>
                    </motion.img>
                   </div>
                      <motion.p
                      initial={{ y: 100, opacity: 0 }} // Start below and invisible
                      whileInView={{ y: 0, opacity: 1 }} // Animate when visible
                      transition={{ duration: 0.5, ease: "easeIn" }}
                        className=' pt-8 text-center text-teal-400 text-xl md:text-3xl'>
                          Fronted Developer !
                      </motion.p>

                   <motion.div  
             
                   className='px-8 py-8 text-sm text-start md:px-[100px] md:py-10 md:text-xl'> 
                   Engaging actively within the open-source community has been a profoundly fulfilling journey. I firmly embrace the value of teamwork and find it imperative to contribute to the developer community that has provided me with a wealth of insights. By consistently dedicating my efforts to open-source projects, I continuously expand my learning horizons and exchange valuable perspectives with colleagues worldwide.
I'm always excited to connect with fellow developers, designers, and enthusiasts. Whether it's discussing new ideas, collaborating on projects, or exploring opportunities, feel free to reach out to me. Together, we can make the web a more delightful and accessible place.
Thank you for visiting my portfolio, and I look forward to sharing my journey with you!
                   </motion.div>
                 <motion.div
                   initial={{ scale: 0.9, opacity: 0 }} // Start slightly small & invisible
                   whileInView={{ scale: 1, opacity: 1 }} // Zoom in when visible
                   transition={{ duration: 0.8, ease: "easeOut" }}
                       className=' pb-10 py-5 flex justify-center w-[100%] text-center'>  
                     <Button/>
                  </motion.div> 
          </div>
  )
}

export default About