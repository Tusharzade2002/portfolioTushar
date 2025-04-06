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
import { Link } from "react-router-dom";
import Button from "../Component/Button";
function Dashboard() {
  return (
    <motion.div 
       initial={{opacity:0,y:-50}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
    style={{ backgroundColor: "#081b29", color: "white" }}>
      <div class="flex px-5 flex-col md:flex-row md:px-[85px]  md:py-10">
         < motion.div   initial={{ y: -100, opacity: 0 }} // Start above and invisible
                            whileInView={{ y: 0, opacity: 1 }} // Animate when visible
                            transition={{ duration: 0.5, ease: "easeIn" }}> 
                 <div>
                   <p className="text-2xl my-4">Hello ,it's me</p>
                   <p className="text-5xl my-4">Tushar Zade</p>
                   <p className="text-3xl my-4" style={{color:"#00f0e0"}}>Frontend Developer</p>
                 </div>
                 <div className="text-xl my-6">Hello ! I'm Tushar, a passionate and driven Frontend Developer and open source contributor. With a background in Information Technology Engineering program. I truly enjoy working in a team and always willing to learn new things.</div>
                  <div className="flex my-4" style={{color:"#00f0e0"}}>
                    <Link to="https://github.com/Tusharzade2002" target="blank"> <FaGithub size={35}  className="m-2"/></Link>
                    <Link to="https://www.linkedin.com/"> <FaLinkedin size={35} className="m-2"/></Link>
                    <Link to=""> <IoLogoInstagram size={35} className="m-2"/></Link>
                    <Link to=""> <MdOutlineMailOutline size={35} className="m-2"/></Link>
                  </div>
                  <div className="flex md:my-10"> 
                  <Button/>
                   <Link className="border-2 px-2 py-2 text-teal-200 md:px-6 md:py-2 border-teal-400 rounded-full md:text-xl" to="/contact" >Let's Talk</Link>
                  </div>
         </motion.div>

         <div className="flex md:w-[950px] md:h-[450px]"> 
             <img className="dev-pic" src={dev}/>
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
