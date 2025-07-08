import React ,{useState} from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
function Contact() {
       const [Detail ,SetDetail]=useState({
             fullname:"",
              number:"",
              address:"",
              email:"",
              message:""
       })
      const handlesubmit = (e) => {
  e.preventDefault();
  console.log(Detail);

  SetDetail({
    fullname: "",
    number: "",
    address: "",
    email: "",
    message: ""
  });
  toast.success("Message send successfully..")
};

  return (
    <motion.div style={{ backgroundColor: "#042c30" }} className="pt-10">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        class="flex text-center justify-center font-black text-5xl py-4"
      >
        Contact
        <p className="text-teal-400 ms-3"> Me !</p>
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col items-center justify-center px-6 "
      >
       <form onSubmit={handlesubmit}>
        <div className="flex flex-col relative">
          <div className="flex flex-col items-center sm:flex-row md:my-5">
            <input
              className="  bg-transparent border-2 text-xl rounded-md p-2 my-4 mx-3 border-teal-400 md:w-[350px] hover:bg-blue-950"
              placeholder="Full Name"
              name="fullname"
              value={Detail.fullname}
              onChange={(e)=>SetDetail({...Detail , [e.target.name]:e.target.value})}
              type="text"
            />
            <input
              className="bg-transparent border-2 text-xl rounded-md p-2 my-4 mx-3 border-teal-400 md:w-[350px]  hover:bg-blue-950 "
              placeholder="Number"
              name="number"
              value={Detail.number}
              onChange={(e)=>SetDetail({...Detail , [e.target.name]:e.target.value})}
              type="text"
            />
          </div>
          <div className="flex flex-col items-center sm:flex-row md:my-5">
            <input
              className="bg-transparent border-2 text-xl rounded-md p-2 my-4 mx-3 border-teal-400 md:w-[350px]  hover:bg-blue-950 "
              placeholder="Address"
              name="address"
              value={Detail.address}
              onChange={(e)=>SetDetail({...Detail , [e.target.name]:e.target.value})}
              type="text"
            />
            <input
              className="bg-transparent border-2 text-xl rounded-md p-2 my-4 mx-3 border-teal-400 md:w-[350px]  hover:bg-blue-950"
              placeholder="Email"
              name="email"
              value={Detail.email}
              onChange={(e)=>SetDetail({...Detail , [e.target.name]:e.target.value})}
              type="text"
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Your Message ...."
            name="message"
            value={Detail.message}
              onChange={(e)=>SetDetail({...Detail , [e.target.name]:e.target.value})}
            className="my-10 p-5 bg-transparent border-2 text-xl rounded-md w-[250px]  h-[200px] border-teal-400  sm:w-[520px] sm:h-[250px]  hover:bg-blue-950 "
          />
        </div>
        <button className=" mb-5 flex items-center border-2  text-teal-100 border-teal-200 px-5 py-2 rounded-3xl hover:bg-teal-200  hover:text-black">
          <p className=" me-2">Send Message</p>
          <Send size={20} />
        </button>
        </form>
        <Toaster/>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
