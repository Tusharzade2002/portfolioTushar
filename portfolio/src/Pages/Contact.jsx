import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
function Contact() {
  return (
    <div>
        <h1 class="text-center font-black text-5xl my-4 ">Contact Me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam in nesciunt impedit eius iste accusamus fuga ab officiis eligendi.</p>
        <div class="flex flex-col">
          <div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-xl align-center bg-indigo-600" >
                  <MdAddIcCall />
              </div>
              <div>
                       <p>Call Me</p>
                       <p>91+ 0987654321</p>
               </div>
            </div>
            <div class="flex items-center">
              <div>
                       <MdEmail />         
              </div>
              <div>
                
                       <p>Email</p>
                       <p>tusharzade29@gmail.com</p>
               </div>
            </div>
            <div class="flex items-center">
              <div>
                     <IoLocation />
              </div>
              <div>
                  <p>Address</p>
                  <p>Butibori ,Nagpur</p>
                     
               </div>
            </div>
           </div>
           <div>
                <input className='m-3' type='text'/>
                <input className='m-3' type='text'/>
                <input className='m-3' type='text'/>
           </div>
        </div>

    </div>
  )
}

export default Contact