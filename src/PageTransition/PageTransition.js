import React from 'react'
import {Link} from 'react-router-dom'

const PageTransition = () => {
    return (
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
    )
}

export default PageTransition
