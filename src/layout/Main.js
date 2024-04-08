import React, { useState,useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel,CustomTabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Home from "../content/Home"
import About from '../content/About';
import Project from '../content/Project';
import classes from './Main.module.css';

function Main() {
  const a11yProps = [
    {
      0 : 'Home',
      1 : 'About',
      2 : 'Project',
  
    }
  ]
  function handleChange(){

  }

  return (
   
    <div className='container is-widescreen'>
 
      <header className={classes.header}>
        <div className={classes.logo}>B-fortpoilo</div>
      
        <nav className={classes.nav}>
          <div  className={classes.item}>Home</div>
          <div  className={classes.item}>About</div>
          <div  className={classes.item}>Project</div>
        </nav> 
      </header>

      <article className={classes.article}>
        <Home />
      </article>
      <article className={classes.article}>
        <About />
      </article>
      <article className={classes.article}>
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
