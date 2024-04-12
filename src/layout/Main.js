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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const homeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
   
    <div className='container is-widescreen'>
      <header className={classes.header}>
        <div className={classes.logo}>B-fortpoilo</div>
      
        <nav className={classes.nav}>
          <div className={classes.item} onClick={homeClick}>Home</div>
          <div className={classes.item} onClick={aboutClick}>About</div>
          <div className={classes.item} onClick={projectClick}>Project</div>
        </nav> 
      </header>
        <Home  ref={homeRef}/>
        <About ref={aboutRef}/>
        <Project ref={projectRef}/>
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
