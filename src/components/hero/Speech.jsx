import { TypeAnimation } from "react-type-animation";
import {motion} from "motion/react";
const Speech = () => {
  return (
    <motion.div className='bubbleContainer' 
    animate={{opacity:[0,1]}} 
    transition={{duration:1}}>
        <div className="bubble">      
        <TypeAnimation    
        sequence={[
        1000,
        // Same substring at the start will only be typed out once, initially
        'Hello',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Hoe Xun.',
        1000,
        'Nice to meet you!',
        1000,
        'Scroll down to learn more about me!',
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