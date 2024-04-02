import React from "react"
import classes from "./About.module.css"

function About(){
    return(
      <section class="section hero  is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">About</p>
            <p class="subtitle">간략한 인사말입니다.</p>
          </div>
          <div className="contetn">
            주 개발은 PHP Web 이지만 이 외 웹기획, 퍼블리싱, 하이브리드 App 개발까지 
            다양한 실무 경험이 있습니다.   
            
            여러 개발과 공부를 하면서 React 관심이 생겼고 제대로 프론트엔드 개발을 하고 싶어서
            프론트엔드 개발자로 도전하게되었습니다.  새로운 경험과 성장을 하기 위해 노력할것입니다.
          </div>
        </div>
      </section>
    )
}

export default About;