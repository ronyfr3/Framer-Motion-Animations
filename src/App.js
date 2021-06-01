import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './PageTransition/Home'
import Contact from './PageTransition/Contact'
import Projects from './PageTransition/Projects'
import PageTransition from './PageTransition/PageTransition'
import {AnimatePresence} from 'framer-motion'
import HeaderRotation from './PageLoadAnimation/HeaderRotation'
import FramerScroll from './OnScroll/FramerScroll'

const App = () => {
  const location = useLocation()
  return (
    <>
      {/* <PageTransition/> */}
    {/* <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home}/>
        <Route path="/project" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      </AnimatePresence> */}
      {/* <HeaderRotation/> */}
      <FramerScroll/>
      </>
  )
}

export default App
