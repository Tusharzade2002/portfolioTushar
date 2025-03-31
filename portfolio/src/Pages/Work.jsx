import React from 'react'
import imgs from '../assets/pexels-fauxels-3184418.jpg'
function Work() {
  return (
        
        
     <div> 
        <h1 class="text-center font-black text-5xl my-5 ">My Work</h1>
                <div class="flex flex-col md:flex-row md:mx-10">
                       <div class="bg-gray-800 m-4 rounded-md ">
                             <img src={imgs} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl  hover:text-rose-400">View Projects</div>
                       </div>
                       <div class="bg-gray-800 m-4 rounded-md">
                             <img src={imgs} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl  hover:text-rose-400">View Projects</div>
                       </div>
                       <div class="bg-gray-800 m-4 rounded-md">
                             <img src={imgs} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl hover:text-rose-400">View Projects</div>
                       </div>
                </div>           
    </div>
  
  )
}

export default Work