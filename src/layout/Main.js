import React, { useState,useRef,useEffect,useCallback } from 'react';
import { Tab, Tabs, TabList, TabPanel,CustomTabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Home from "../content/Home"
import About from '../content/About';
import Project from '../content/Project';
import AutoCounter from "../content/AutoCounter"
import classes from './Main.module.css';


function Main() {
  const {currentMenu , setCurrent } = useState('Home');
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    console.log("scrolling")
  }, [])

  useEffect(() => {
    const div = scrollRef.current
    div.addEventListener("scroll", handleScroll)
  }, [handleScroll])


  const arrMenu = [
    {
      0 : 'Home',
      1 : 'About',
      2 : 'Project',
  
    }
  ]
  // function handleClick(){
  //   scrollRef.current.
  // }

  return (
   
    <div className='container is-widescreen'>
 
      <header className={classes.header}>
        <div className={classes.logo}>B-fortpoilo</div>
      
        <nav className={classes.nav}>
          <div  className={classes.item} onClick={handleScroll()}>Home</div>
          <div  className={classes.item}  onClick={handleScroll()}>About</div>
          <div  className={classes.item} onClick={handleScroll()}>Project</div>
        </nav> 
      </header>
        <AutoCounter />
      <article className={classes.article} >
        <Home />
      </article>
      <article className={classes.article}>
        <About />
      </article>
      <article className={classes.article}  ref={scrollRef}>
        <Project />
      </article>

      <footer className={classes.footer}>
        <div className={classes.text_centered}>
            <p>
              <strong>portfoilo</strong> by EunKyeong.
            </p>
        </div>
      </footer>
    </div>
   
  );
}

export default Main;
