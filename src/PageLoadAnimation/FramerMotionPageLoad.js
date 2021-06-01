import React from 'react'
import {motion} from 'framer-motion'
//https://www.framer.com/api/motion/types/#spring
const FramerMotionPageLoad = () => {
  
  const varient = {
    /*
    staggerChildren: number [with dealyChildren staggerChildren make delay of children in calculated time]
    When using variants, animations of child components can be staggered by this duration (in seconds).
    For instance, if staggerChildren is 0.01, the first child will be [[[delayed]]] by 0 seconds, the second by 0.01, the third by 0.02 and so on.
    The calculated stagger [[[delay]]] will be added to [[[delayChildren]]].
      */
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1, y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        duration: 1.5
    }}
  }
  return (
    <motion.div
      variants={varient}
      initial="hidden"
      exit="hidden"
      animate="show"
    >
    <h1>hello</h1>
      
    </motion.div>
  )
}

export default FramerMotionPageLoad
