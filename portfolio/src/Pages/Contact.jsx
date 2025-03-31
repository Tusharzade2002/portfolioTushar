import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
function Contact() {
  return (
    <div style={{backgroundColor:"#001433"}}>
        <h1 class="text-center font-black text-5xl py-4">Contact Me</h1>
        <p class="p-4 md:p-10 items-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam in nesciunt impedit eius iste accusamus fuga ab officiis eligendi.</p>
        <div class="flex flex-col items-center md:flex-row md:justify-around">
          <div>
            <div class="flex items-center m-3">
              <div class="w-8 h-8 rounded-full  flex items-center justify-center bg-indigo-600" >
                  <MdAddIcCall size={25}/>
              </div>
              <div class="ms-5">
                       <p>Call Me</p>
                       <p>91+ 0987654321</p>
               </div>
            </div>
            <div class="flex items-center m-3">
              <div class="w-8 h-8 rounded-full  flex items-center justify-center bg-indigo-600">
                       <MdEmail size={25}/>         
              </div>
              <div class="ms-5">
                
                       <p>Email</p>
                       <p>tusharzade29@gmail.com</p>
               </div>
            </div>
            <div class="flex items-center m-3">
              <div class="w-8 h-8 rounded-full  flex items-center justify-center bg-indigo-600">
                     <IoLocation size={25}/>
              </div>
              <div class="ms-5">
                  <p>Address</p>
                  <p>Butibori ,Nagpur</p>
                     
               </div>
            </div>
           </div>
           <div class="flex flex-col">
                <input className='m-3' type='text'/>
                <input className='m-3' type='text'/>
                <input className='m-3' type='text'/>
           </div>
        </div>

    </div>
  )
}

export default Contact