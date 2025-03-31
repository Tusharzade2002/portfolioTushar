import React from "react";
import logo from "../assets/WhatsApp  Image 2025-03-17 at 12.05.43 PM.jpeg";
import Work from "./Work";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
function Dashboard() {
  return (
    <div style={{ backgroundColor: "#001433", color: "white" }}>
      <div class="flex  items-center flex-col">
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            class="rounded-full object-cover my-10"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <h2 class="text-center text-3xl font-bold">Tushar Zade</h2>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            aperiam?
          </h4>
        </div>
      </div>
{/* ABOUT Page */}
      
       <About/>

             <Work/>
             <Service/>
             <Contact/>
    </div>
  );
}

export default Dashboard;
