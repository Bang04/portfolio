import React, { useState } from 'react';
// import 'bulma/css/bulma.min.css';

import Intro from "./tab/intro"
import About from './tab/about';
import Skill from './tab/skill';
import Project from './tab/project';

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
    <div className='layout'>
      <header className='header'>
        {/* <div className='logo'>eunKyeong</div> */}

        <div class="tabs">
          <ul>
            <li onClick={() => tabClickHandler(0)} class="is-active"><p>intro</p></li>
            <li onClick={() => tabClickHandler(1)}><p>about</p></li>
            <li onClick={() => tabClickHandler(2)}><p>skill</p></li>
            <li onClick={() => tabClickHandler(3)}><p>project</p></li>
          </ul>
        </div>

      </header>
      <section className='contents'>
       {tabList[activeTab]}
      </section>
      <footer>
        footer
      </footer>
    </div>
   
  );
}

export default Main;
