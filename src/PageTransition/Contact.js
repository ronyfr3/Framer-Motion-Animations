import React from 'react'
import {motion} from 'framer-motion'
import { animateThree, transition } from './animations/Animations'

const Contact = () => {

    //custom css var for motion.div
    // const pageStyle = {
    //     position:"absolute"
    // }
    return (
        <motion.div
            // style={pageStyle} style this way if you want
            initial="out"
            animate="end"
            exit="out"
            variants={animateThree}
            transition={transition}
        >
            <h1>Contacts</h1>
        </motion.div>
    )
}

export default Contact
