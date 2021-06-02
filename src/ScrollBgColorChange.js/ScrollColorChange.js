import React, { useState } from 'react'

const ScrollColorChange = () => {
    // after passing 100vh document color change
    //this scrollPos will support all major browser for find scrollY
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    //for body
    const changeBodyColor = () => {
        if (scrollPos >= 80) {
        document.body.style.backgroundColor = 'green'
        } else {
            document.body.style.backgroundColor = 'pink'
        }
    }
    window.addEventListener('scroll', changeBodyColor)
    

    //for navbar
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    console.log('scrollpos',scrollPos)
    console.log('isTrue', colorChange)

    return (
        <div>
            <nav className={colorChange ? 'changed' : 'notChanged'}></nav>
            <h1 className={colorChange ? 'magic' : 'notMagic'}>Hello Queen</h1>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
        </div>
    )
}

export default ScrollColorChange
