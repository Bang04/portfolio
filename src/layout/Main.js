import React, { useState,useRef } from 'react';

import Tab from "../layout/Tab"
import Home from "../content/Home"
import About from '../content/About';
import Project from '../content/Project';
import classes from './Main.module.css';

function Main() {

  return (
   
    <div className='container is-widescreen'>
      <header className={classes.header}>
        <div className={classes.logo}>B-fortpoilo</div>
        
        <nav className={classes.nav}>
          <div className={classes.item}>Home</div>
          <div className={classes.item}>About</div>
          <div className={classes.item}>Project</div>
        </nav>
      </header>
       

      <article className={classes.article}>
        <Home />
        <About />
        <Project />
      </article>

      <footer class="footer">
        <div class="has-text-centered">
            <p>
              <strong>portfoilo</strong> by EunKyeong.
            </p>
        </div>
      </footer>
    </div>
   
  );
}

export default Main;
