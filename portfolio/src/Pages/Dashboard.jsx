import React from "react";
import logo from "../assets/WhatsApp  Image 2025-03-17 at 12.05.43 PM.jpeg";
import Work from "./Work";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Footer from "../Layout/Footer";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import './main.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import dev from '../assets/devpng.png'
function Dashboard() {
  return (
    <motion.div 
       initial={{opacity:0,y:-50}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
    style={{ backgroundColor: "#081b29", color: "white" }}>
      <div class="flex p-3">
         <div> 
                 <div>
                   <p>Hello ,it's me</p>
                   <p>Tushar Zade</p>
                   <p style={{color:"#00f0e0"}}>Frontend Developer</p>
                 </div>
                 <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, in sed incidunt eius commodi temporibus? Iure placeat, sunt fugiat pariatur fuga sint modi ducimus alias aperiam, totam quam harum dicta.</div>
                  <div className="flex" style={{color:"#00f0e0"}}>
                     <FaGithub />
                     <FaLinkedin />
                     <IoLogoInstagram />
                     <MdOutlineMailOutline />
                  </div>
                  <div className="flex"> 
                    <div>Download CV</div>
                    <div>Let's Talk</div>
                  </div>
         </div>

         <div>
          <img src={dev}/>
         </div>
                         
      </div>
{/* ABOUT Page */}
             <About/>
             <Work/>
             <Service/>
             <Contact/>
            
    </motion.div>
  );
}

export default Dashboard;
