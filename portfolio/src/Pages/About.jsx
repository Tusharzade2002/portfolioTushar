import React from 'react'
import logo from '../assets/WhatsApp  Image 2025-03-17 at 12.05.43 PM.jpeg'
import Button from '../Component/Button'

function About() {
  return (
    <div style={{backgroundColor:"#042c30"}}>
                   <div className=' py-8 flex justify-center text-3xl'> <p className='text-center'>About</p><p className='text-teal-400 text-center'>Me</p></div> 
                   <div className=' flex justify-center'>
                    <img className='  rounded-full w-[200px] h-[200px] '   src={logo} alt='...'/>
                   </div>
                      <p className=' pt-8 text-center text-teal-400 text-xl md:text-3xl'>Fronted Developer !</p>
                   <div className='px-8 py-8 text-sm text-start md:px-[100px] md:py-10 md:text-xl'> 
                   Engaging actively within the open-source community has been a profoundly fulfilling journey. I firmly embrace the value of teamwork and find it imperative to contribute to the developer community that has provided me with a wealth of insights. By consistently dedicating my efforts to open-source projects, I continuously expand my learning horizons and exchange valuable perspectives with colleagues worldwide.
I'm always excited to connect with fellow developers, designers, and enthusiasts. Whether it's discussing new ideas, collaborating on projects, or exploring opportunities, feel free to reach out to me. Together, we can make the web a more delightful and accessible place.
Thank you for visiting my portfolio, and I look forward to sharing my journey with you!
                   </div>
                 <div className='py-5 flex justify-center w-[100%] text-center'>  <Button/></div> 
          </div>
  )
}

export default About