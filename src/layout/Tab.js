import React, { useState } from 'react';


import 'bulma/css/bulma.min.css';
import Calsses from './Main.module.css';

function Tab(name){

  const handleClick = () =>{
    // onClick(activeTab);
  }
  return (
    
    //  <li onClick={() => handleClick(0)} className={practiveTab == props.key ? 'is-active' : ''}>{props.naem}</li>
      <li>{name}</li>
  );
}

export default Tab;
