import React from 'react'
import {motion} from 'framer-motion'

const TextReveal = () => {
    const line1 = "I'M"
    const line2 = "ABDUR RAKIB"
    const line3 = "RONY"

    const sentence = {
        hidden: {
            opacity:1
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren:0.08
            }
        }
    }
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
                repeatDelay: 1,
                ease: [0.17, 0.67, 0.83, 0.67],
                type: "spring",
            }
        }
    }
    return (
        <div>
            <motion.h1
                className="load-screen-message"
                variants={sentence}
                initial="hidden"
                animate="visible"
                exitBeforeEnter
            >
                {
                    line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })
                }
                <br></br>
                {
                    line2.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })
                }
                <br></br>
                {
                    line3.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })
                }

            </motion.h1>
        </div>
    )
}

export default TextReveal
