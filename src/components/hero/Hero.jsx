
import "./hero.css"
import Shape from "./Shape";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";



/*Creating Different Animation Variants*/
const awardVariants={
  initial:{
    x: -100,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.2,
    },
  },
};

  const followVariants={
    initial:{
      y: -100,
      opacity: 0,
    },
    animate:{
      y: 0,
      opacity: 1,
      transition:{
        duration:1,
        staggerChildren: 0.2,
      },
    },

};
const Hero = () => {
  return <div className='hero'>
    <div className="hSection left">
      {/*TITLE*/}
      <motion.h1 
        initial={{y:-100,opacity:0}} 
        animate={{y:0,opacity:1}}
        transition={{duration:1}} 
        className="hTitle"> 
        Hey There,
        <br/>
        <span>I'm Hoe Xun!</span>
      </motion.h1>
      {/*AWARDS*/}
      <motion.div 
        variants={awardVariants}
        initial="initial"
        animate="animate"
        className="awards"
      >
        <motion.h2 variants={awardVariants}>Programming Languages</motion.h2>
        <motion.p variants={awardVariants}> Python<br/> C <br/> Java <br/></motion.p>
        <motion.div variants={awardVariants} className="awardList">
          <motion.img variants={awardVariants} src="/python.png" alt="" />
          <motion.img variants={awardVariants} src="/C.png" alt="" />
          <motion.img variants={awardVariants} src="/java.png" alt="" />
        </motion.div>
      </motion.div>
      {/*Scroll SVG */}
      <motion.a animate={{y:[0,5], opacity:[0,1,0]}} transition={{
        repeat:Infinity,
        duration:4,
        ease:"easeInOut",
      }} href="#services" className="scroll">
        <svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-mouse"
        >
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="10" r="2" fill="white">
            <animate
              attributeName="cy"
              values="10; 20; 10"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </motion.a>
    </div>
    <div className="hSection right">
      {/*Follow ,insert linkedin or ig */}
      <motion.div variants={followVariants}
       initial="initial" animate="animate" className="follow">
        <motion.a variants={followVariants} href="/">
          <img src="/instagram.png" alt="" />
        </motion.a>
        <motion.a variants={followVariants} href="https://www.linkedin.com/in/laihoexun/">
          <img src="/LinkedInIcon.png" alt="" />
        </motion.a>
        <motion.a variants={followVariants} href="https://github.com/lhx562389">
          <img src="/GitHubIcon.png" alt="" />
        </motion.a>
        <motion.div variants={followVariants} className="followTextContainer">
          <div className="followText">Follow Me</div>
        </motion.div>
      </motion.div>
      {/*BUBBLE*/}
      <Speech/>
      {/* Certificate */}
      <motion.div     
      animate={{opacity:[0,1]}} 
      transition={{duration:1}}
      className="certificate">
        <img src="/WSC.png" alt="" />
        NTU WSC RSP, Friends of Children
        <br/>
        22nd Main Committee
        <br/>
        Chairperson
      </motion.div>
      {/* CONTACT BUTTON */}
      <motion.a href="/#contact" 
      animate={{x:[200,0],opacity:[0,1],}}
      transition={{duration:2,}}>

      <motion.div 
      className="contactButton" 
      animate={{rotate:[0,360]}}
      transition={{
        duration:10, 
        repeat:Infinity,
        ease: "linear",
      }}>
        <svg viewBox="0 0 200 200" width="150" height="150">
          <circle cx="100" cy="100" r="90" fill="pink" />
          <path
            id="innerCirclePath"
            fill="none"
            d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
          <text className="circleText">
            <textPath href="#innerCirclePath">Hire Now</textPath>
          </text>
          <text className="circleText">
            <textPath href="#innerCirclePath" startOffset={"50%"}>Contact Me</textPath>
          </text>
        </svg>

        <div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 6 18 6 18 15" />
        </svg>
        </div>
      </motion.div>
      </motion.a>
    </div>
    <div className="bg">
      {/*3d*/}
      <Canvas>
        <Suspense fallback="loading...">  
         <Shape />
        </Suspense>
      </Canvas>
      <div className="hImg">
        <img src="LinkedInPhoto.png" alt="" />
      </div>
    </div>
  </div>
 
};

export default Hero;