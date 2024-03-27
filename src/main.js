import React, { useState } from 'react';
// import 'bulma/css/bulma.min.css';

import Intro from "./tab/intro"
import About from './tab/about';
import Skill from './tab/skill';
import Project from './tab/project';
import 'bulma/css/bulma.min.css';
import './main.css';

function Main() {

  const [activeTab, setActiveTab ] = useState(0);
  const tabList = {
    0: <Intro />,
    1: <About />,
    2: <Skill />,
    3: <Project />,
  };
  

  const tabClickHandler = (id) =>{
    setActiveTab(id);
  }
  return (
    <div className='container is-widescreen'>
      <header className='header'>
        {/* <div className='logo'>eunKyeong</div> */}

        <div class="tabs">
          <ul>
            <li onClick={() => tabClickHandler(0)} className={activeTab == 0 ? 'is-active' : ''}><p>intro</p></li>
            <li onClick={() => tabClickHandler(1)} className={activeTab == 1 ? 'is-active' : ''}><p>about</p></li>
            <li onClick={() => tabClickHandler(2)} className={activeTab == 2 ? 'is-active' : ''}><p>skill</p></li>
            <li onClick={() => tabClickHandler(3)} className={activeTab == 3 ? 'is-active' : ''}><p>project</p></li>
          </ul>
        </div>

      </header>
      <section className='contents'>
       {tabList[activeTab]}
      </section>
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
