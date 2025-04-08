import ConsoleModelContainer from "./console/ConsoleModelContainer";
import GuitarModelContainer from "./guitar/GuitarModelContainer";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Programming",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Playing Guitar",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Playing Games",
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          My Hobbies
        </motion.h1>

        {/* Optional: Personal blurb */}
        <motion.p
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="aboutText"
        >
          I'm passionate about coding, music, and gaming. These are not just
          hobbies—they reflect how I think, create, and unwind. Click on each to
          learn more about what they mean to me.
        </motion.p>

        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <GuitarModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
