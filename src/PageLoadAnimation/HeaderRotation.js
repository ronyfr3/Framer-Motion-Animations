import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const HeaderRotation = () => {
    return (
        <motion.div
            animate={{
                scale: [0, 0.5,1], //change this if you want
                rotate:[180,360] //changeable rotations
            }}
            transition={{
              type: "spring",
              stiffness: 1000,
              duration:0.4
            }}
        >
           <nav>
            <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='project'>
                  <li>Projects</li>
                </Link>
                <Link to='contact'>
                  <li>Contact</li>
                </Link>
            </ul>
        </nav> 
        </motion.div>
    )
}

export default HeaderRotation
