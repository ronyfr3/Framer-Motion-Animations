import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform
} from 'framer-motion'

const FramerScroll = () => {
    const { scrollY } = useViewportScroll()
    // console.log(scrollY.current)
    // console.log(scrollY.prev)
    // console.log(scrollY)
    const y1 = useTransform(scrollY,[0,300],[0,200])
    const y2 = useTransform(scrollY,[0,300],[0,-500])
    const x1 = useTransform(scrollY,[300,0],[200,0])
    const x2 = useTransform(scrollY,[300,0],[-100,0])
    
    console.log(y1)
    console.log(y2)

    return (
        <>
        <motion.div
                className='box1'
                style={{
                    y:y1,x:x1
                }}
        >
            Hello
        </motion.div>

        <motion.div
                className='box2'
                style={{
                    y:y2,x:x2
                }}
        >
                Hello2
        </motion.div>
            </>
    )
}

export default FramerScroll
