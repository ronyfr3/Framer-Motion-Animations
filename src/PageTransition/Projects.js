import React from 'react'
import {motion} from 'framer-motion'
import { animateTwo, transition } from './animations/Animations'

const Projects = () => {
    // const pageStyle = {
    //     position:"absolute"
    // }
    return (
        <motion.div
            // style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={animateTwo}
            transition={transition}
        >
            <h1>Projects</h1>
        </motion.div>
    )
}

export default Projects
