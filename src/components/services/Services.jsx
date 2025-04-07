import ConsoleModelContainer from "./console/ConsoleModelContainer";
import GuitarModelContainer from "./guitar/GuitarModelContainer";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import Counter from "./Counter";
import { animate } from "motion";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";


/* Creating text animations*/
const textVariants={
    initial:{
        x:-100,
        y: -100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition: {
            duration:1,
        },

    },
};

const listVariants={
    initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition: {
            duration:1,
            staggerChildren: 0.5, /*the different icons animated at 0.5s interval*/
        },

    },
};


const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Programming",
    counter: 4,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Playing Guitar",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Playing Games",
    counter: 46,
  },
];

const Services = () => {
    const [currentServiceId, setCurrentServiceId]= useState(1);
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-200px"});  /*useInView and isInView to ensure that animation runs after changing 200 px*/
    return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1 
        variants={textVariants} 
        animate={isInView? "animate":"initial"}
         className="sTitle">
            About Me
         </motion.h1>
        <motion.div 
         variants={listVariants} 
         animate={isInView? "animate":"initial"}
         className="serviceList"
         >
          {services.map((service) => (
            <motion.div variants={listVariants} 
            className="service" key={service.id}
            onClick={()=> setCurrentServiceId(service.id)}>
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
            <Counter from={0} to={140} text="Projects Completed" />
            <Counter from={0} to={169} text="Happy Clients" />
        </div>
      </div>

      <div className="sSection right">
        {currentServiceId === 1 ? (
            <ComputerModelContainer />
        ) : currentServiceId === 2 ?(
        <GuitarModelContainer />)
         : (
         <ConsoleModelContainer />    
         )}

      </div>
    </div>
  );
};

export default Services;
