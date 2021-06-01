import React from 'react'
import {motion} from 'framer-motion'
import { animateOne,transition } from './animations/Animations'

const Home = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animateOne}
            transition={transition}
        >
            <h1>Home</h1>
        </motion.div>
    )
}

export default Home
