import { TypeAnimation } from "react-type-animation";
import {motion} from "motion/react";
const Speech = () => {
  return (
    <motion.div className='bubbleContainerAbout' 
    animate={{opacity:[0,1]}} 
    transition={{duration:1}}>
        <div className="bubbleAbout">      
        <TypeAnimation    
        sequence={[
        1000,
        // Same substring at the start will only be typed out once, initially
        'Oh',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'That is me!',
        1000,
        'I was briefing our volunteers for our annual Family Day Event!',
        1000,
        'Stay Safe and Have Fun Everyone!',
        1000
      ]}
      wrapper="span"    
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
    </div>
        <img src="/LAIHOEXUN.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;