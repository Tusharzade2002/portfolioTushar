import React from 'react'
import { AiFillCodepenSquare } from "react-icons/ai";
function Service() {
  return (
    <div style={{backgroundColor:"#001433"}}>
    <h1 class="text-center font-black text-5xl my-4">My Services</h1>
    <div class=" flex flex-col sm:flex-row md:mx-5 ">
        <div class="m-3 p-2 w-50  bg-blue-950 rounded-md">
           <AiFillCodepenSquare size={60} class="text-purple-800 bg-transparent"/>
           <h1 class="font-semibold text-3xl p-5">Web Design</h1>
           <p class=" text-xl p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quia magnam minus adipisci placeat recusandae hic! Repellat quasi dolores adipisci!</p>
           <button class="text-purple-800 p-5">Learn More</button>
        </div>

        <div class="m-3 p-2 w-50  bg-blue-950  rounded-md">
           <AiFillCodepenSquare size={60} class="text-purple-800 bg-transparent"/>
           <h1 class="font-semibold text-3xl p-5">Web Design</h1>
           <p class=" text-xl p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quia magnam minus adipisci placeat recusandae hic! Repellat quasi dolores adipisci!</p>
           <button class="text-purple-800 p-5">Learn More</button>
        </div>

        <div class="m-3 p-2 w-50 bg-blue-950 rounded-md">
           <AiFillCodepenSquare size={60} class=" text-purple-800 bg-transparent"/>
           <h1 class="font-semibold text-3xl p-5">Web Design</h1>
           <p class=" text-xl p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quia magnam minus adipisci placeat recusandae hic! Repellat quasi dolores adipisci!</p>
           <button class="text-purple-800 p-5">Learn More</button>
        </div>
    </div>
</div>
  )
}

export default Service