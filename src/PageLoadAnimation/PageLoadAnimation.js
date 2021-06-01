import React, { useEffect, useState } from 'react'

//https://medium.com/@davidfalconbernhard/how-to-animate-once-on-page-load-in-react-js-e357fd899a4b

const PageLoadAnimation = () => {
    //this commented code for when a user first load the page that time he see that fade in animation,after finish session time he will again see this

    // const [animate, setAnimate] = useState(true)
    // useEffect(() => {
        //check for token
    //     if (window.sessionStorage.getItem("firstLoadDone") === null) {
    //         setAnimate(true)
            //set the token to be next time!
    //         window.sessionStorage.setItem("firstLoadDone",1)
    //     } else {
    //         setAnimate(false)
    //     }
    // },[])
    return (
        // <div className={animate ? "fade-in":""}>
        <div className="fade-in">
            <h1>GODZILA</h1>
        </div>
    )
}

export default PageLoadAnimation
